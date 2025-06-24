import React from "react";
import loginImage from "../assets/authImage.png";
import ProFastLogo from "../pages/shared/ProFastLogo/ProFastLogo";
import Login from "../pages/Authentication/Login";
import { useForm } from "react-hook-form";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const AuthLayout = () => {
  return (
    <div>
      <div className=" ">
        <ProFastLogo></ProFastLogo>
        <div className="p-12 hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1">
            <img src={loginImage} className="max-w-sm rounded-lg shadow-2xl" />
          </div>
          <div className="flex-1">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AuthLayout;
