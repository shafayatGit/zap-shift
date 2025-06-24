import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { BiRegistered } from "react-icons/bi";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    signInUser(email, password)
      .then((res) => {
        console.log(res);
        toast.success("Logged In!");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed");
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="fieldset">
        {/* Email Field */}
        <label className="label">Email</label>
        <input
          required
          type="email"
          {...register("email", { required: true })}
          className="input"
          placeholder="Email"
        />
        {errors.email?.type === "required" && (
          <p className="text-red-600" role="alert">
            Email is required
          </p>
        )}
        {/* pass */}
        <label className="label">Password</label>
        <input
          type="password"
          {...register("password", {
            required: true,
            // minLength: 6,
            // pattern: /^[A-Za-z]+$/i,
          })}
          className="input"
          placeholder="Password"
        />
        {errors.password?.type === "required" && (
          <p role="alert">Password is required</p>
        )}
        {/* {errors.password?.type === "minLength" && (
          <p role="alert">Length has to be 6 digit</p>
        )}
        {errors.password?.type === "pattern" && (
          <p role="alert">Include a capital and a small letter</p>
        )} */}
        {/* Forgot pass */}
        <div>
          <a className="link link-hover">Forgot password?</a>
        </div>
        {/* LogiN Button */}
        <input
          type="submit"
          value="Login"
          className="btn btn-neutral mt-4"
          name="submit"
          id=""
        />
      </fieldset>
    </form>
  );
};

export default Login;
