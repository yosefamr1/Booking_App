import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import loginimg from '../../assets/images/login.png';
import { useDispatch } from "react-redux";
import { setUser } from "../../store/userSlice";
import logo from '../../assets/images/logo.png'
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.some((u) => u.email === data.email);

    if (exists) {
      alert("Email already registered");
      return;
    }

    users.push(data);
    // save in localStorage 
    localStorage.setItem("users", JSON.stringify(users));
    //save in redux
    dispatch(setUser(data));

    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <div className="register_page flex gap-4 w-4/5 m-auto p-6 ">

      <div className=" register-container flex w-full  m-auto bg-white text-center rounded-3xl p-8 h-full">
        <div className="form w-1/2">
          <div className="flex justify-center !mt-4"><img className="text-center" src={logo} alt="logo" /></div>
        <h2 className="text-2xl text-center text-black font-bold !mb-6 !mt-8">Sign up</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col py-5 w-4/5 m-auto h-full" >

          {/* Name */}
          <div className="text-start">
            <label className="block !mb-1 text-[#4D556F]">Name</label>
            <input
              type="text"
              className="border-none w-full !p-2 bg-[#EAEBEC] rounded-md text-black"
              placeholder="Name"
              {...register("username", {
                required: "Name is required",
                // validate: (value) => !/\s/.test(value) || "No spaces allowed",
              })}
            />
            {errors.username && <p>{errors.username.message}</p>}
          </div>

          {/* Email */}
          <div className="text-start">
            <label className="block !mb-1 text-[#4D556F]">Email</label>
            <input
              type="email"
              className="border-none w-full !p-2 bg-[#EAEBEC] rounded-md text-black"
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
          {/* Password */}
          <div className="text-start">
            <label className="block !mb-1 text-[#4D556F]">Password</label>
            <input
              type="password"
              className="border-none w-full !p-2 bg-[#EAEBEC] rounded-md text-black"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/,
                  message:
                    "Password must contain 1 capital letter, 1 number, 1 special character, and be at least 6 characters",
                },
              })}
            />
            {errors.password && <p>{errors.password.message}</p>}

          </div>
          {/* Confirm Password */}

          <div className="text-start">
            <label className="block !mb-1 text-[#4D556F]">Confirm Password</label>
            <input
              type="password"
              className="border-none w-full !p-2 bg-[#EAEBEC] rounded-md text-black"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

          </div>
          {/* Country */}
          <div className="text-start">
            <label className="block !mb-1 text-[#4D556F]">Country</label>
            <input
              type="text"
              className="border-none w-full !p-2 bg-[#EAEBEC] rounded-md text-black"
              placeholder="Country"
              {...register("country", {
                required: "Country is required",
              })}
            />
            {errors.country && <p>{errors.country.message}</p>}
          </div>

          {/* Phone */}
          <div className="text-start">
            <label className="block !mb-1 text-[#4D556F]">Phone</label>
            <input
              type="text"
              className="border-none w-full !p-2 bg-[#EAEBEC] rounded-md text-black"
              placeholder="Phone"
              maxLength="12"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Phone must contain only numbers",
                },
                maxLength: {
                  value: 12,
                  message: "Phone number must be at most 12 digits",
                },
              })}
            />
            {errors.phone && <p>{errors.phone.message}</p>}

          </div>
          {/* Address (optional) */}
          <div className="text-start">
            <label className="block !mb-1 text-[#4D556F]">Address</label>
            <input
              type="text"
              className="border-none w-full !p-2 bg-[#EAEBEC] rounded-md text-black"
              placeholder="Address (optional)"
              {...register("address")}
            />

          </div>
          <button
            className="bg-blue-600 text-white !px-4 !py-2 rounded w-full hover:bg-blue-700 transition !mt-10 cursor-pointer"
            type="submit">Register</button>
          <Link to={`/login`}>
            <p className="text-black text-base !my-8  text-center cursor-pointer underline">Already have an account? <span className="text-[#0A6ADA]">Login</span></p>
          </Link>
          <p className="text-[#525252] text-center "><span className="text-[#1C1C1C] font-bold">sign up</span> with Others</p>

          <div className="flex justify-center items-center gap-2 p-2 border-2 border-black rounded-2xl cursor-pointer">
            <FaGoogle />
            <p className="text-[#1C1C1C]">sign up with <span className="font-bold">google</span></p>
          </div>
          <div className="flex justify-center items-center gap-2 p-2 border-2 border-black rounded-2xl cursor-pointer">
            <FaFacebook />
            <p className="text-[#1C1C1C]">sign up with <span className="font-bold">Facebook</span></p>
          </div>
        </form>
        </div>
        {/* //img  */}
        <div className="register_img w-1/2 h-full">
          <img className=" m-auto w-full h-full" src={loginimg} alt="Login" />
        </div>
      </div>


    </div>

  );
}

export default RegisterPage;