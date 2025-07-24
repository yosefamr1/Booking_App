import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import loginimg from '../../assets/images/login.png';


function RegisterPage() {
  const navigate = useNavigate();

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
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <div className="register_page flex gap-4 h-screen w-full p-2 ">

      <div className="register-container w-1/2 h-screen m-auto bg-white text-center rounded-3xl p-8">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-4 w-4/5 mx-auto" >

          {/* Name */}
          <input
            type="text"
            placeholder="Name"
            {...register("username", {
              required: "Name is required",
              validate: (value) => !/\s/.test(value) || "No spaces allowed",
            })}
          />
          {errors.username && <p>{errors.username.message}</p>}

          {/* Email */}
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

          {/* Password */}
          <input
            type="password"
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

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

          {/* Country */}
          <input
            type="text"
            placeholder="Country"
            {...register("country", {
              required: "Country is required",
            })}
          />
          {errors.country && <p>{errors.country.message}</p>}

          {/* Phone */}
          <input
            type="text"
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

          {/* Address (optional) */}
          <input
            type="text"
            placeholder="Address (optional)"
            {...register("address")}
          />

          <button type="submit">Register</button>
        </form>
      </div>

            {/* //img  */}
      <div className="register_img w-1/2">
        <img className=" m-auto w-full   h-full" src={loginimg} alt="Login" />
      </div>

    </div>

  );
}

export default RegisterPage;