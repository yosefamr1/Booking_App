import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import loginimg from '../../assets/images/login.png';
import { useDispatch } from "react-redux";
import { setUser } from "../../store/userSlice";

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

    alert("Login successful!");
    navigate("/home");
  };

  return (
    <div className="login_page flex gap-4 h-screen w-full p-2 ">

      <div className="login-container w-1/2 h-screen m-auto bg-white text-center rounded-3xl p-8">
        <h2>Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <input
            type="email"
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

          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}

          {errors.auth && <p className="auth-error">{errors.auth.message}</p>}

          <button type="submit">Login</button>
        </form>
      </div>
      <div className="register_img w-1/2">
        <img className=" m-auto w-full   h-full" src={loginimg} alt="Login" />
      </div>
    </div>

  );
}


