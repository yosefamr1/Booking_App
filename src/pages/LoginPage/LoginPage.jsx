import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import loginimg from '../../assets/images/login.png';
import { useDispatch } from "react-redux";
import { setUser } from "../../store/userSlice";
import { loadBookingsForUser } from "../../store/bookingsSlice";
import logo from '../../assets/images/logo.png'
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";



export default function LoginPage() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = (data) => {
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(
      (user) => user.email === data.email && user.password === data.password
    );

    if (!matchedUser) {
      setError("auth", { message: "Email or password is incorrect" });
      return;
    }

    // localStorage.setItem("loggedUser", JSON.stringify(matchedUser));
    // Save logged user in redux
    dispatch(setUser(matchedUser));
    dispatch(loadBookingsForUser());
    alert("Login successful!");
    navigate("/home");
  };

  return (
    <div className="login_page flex gap-4 h-screen w-full p-2 ">

      <div className="login-container w-1/2 h-screen m-auto bg-white text-center rounded-3xl p-8">
        <div className="flex justify-center !mt-4"><img className="text-center" src={logo} alt="logo" /></div>
        <h2 className="text-2xl text-center text-black font-bold !mb-6 !mt-8">LOGIN</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <div className="text-start">
            <label className="block !mb-1 text-[#4D556F]">Email</label>
            <input
              type="email"
              className="border w-full !p-2 bg-[#EAEBEC] rounded-md text-black"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <div className="text-start">
            <label className="block !mb-1 text-[#4D556F]">Password</label>
            <input
              type="password"
              className="border-none w-full !p-2 bg-[#EAEBEC] rounded-md text-black"

              placeholder="Password"
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && <p>{errors.password.message}</p>}

            {errors.auth && <p className="auth-error">{errors.auth.message}</p>}
          </div>

          <button
            className="bg-blue-600 text-white !px-4 !py-2 rounded w-full hover:bg-blue-700 transition !mt-10 cursor-pointer"
            type="submit">Login</button>

          <Link to={`/register`}>
            <p className="text-black text-base !my-8  text-center cursor-pointer underline">Don’t have an account? <span className="text-[#0A6ADA]">Register</span></p>
          </Link>
          <p className="text-[#525252] text-center "><span className="text-[#1C1C1C] font-bold">Login</span> with Others</p>

          <div className="flex justify-center items-center gap-2 p-2 border-2 border-black rounded-2xl cursor-pointer">
            <FaGoogle />
            <p className="text-[#1C1C1C]">Login with <span className="font-bold">google</span></p>
          </div>
          <div className="flex justify-center items-center gap-2 p-2 border-2 border-black rounded-2xl cursor-pointer">
            <FaFacebook />
            <p className="text-[#1C1C1C]">Login with <span className="font-bold">Facebook</span></p>
          </div>

        </form>
      </div>
      <div className="register_img w-1/2">
        <img className=" m-auto w-full   h-full" src={loginimg} alt="Login" />
      </div>
    </div>

  );
}


