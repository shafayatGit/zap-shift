import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { BiRegistered } from "react-icons/bi";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../assets/Firebase/firebase.init";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   Login with Google
  const provider = new GoogleAuthProvider();
  const signinWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
        toast.success("Registered!");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed");
      });
  };

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
    <div>
      <h1 className="text-4xl font-bold">Login Now!</h1>
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
      <div>
        <h1 className="text-center ">---OR---</h1>
      </div>
      <div className="max-w-6xl mx-auto">
        <button
          onClick={signinWithGoogle}
          className="btn text-center w-full bg-white text-black border-[#e5e5e5]"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
      </div>
      <div className="text-center">
        <h1>
          Don't have an account?{" "}
          <Link to={"/register"} className="text-blue-500">
            Register
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Login;
