import { AuthGreeting } from "components/module/auth";
import React from "react";
import { Outlet } from "react-router-dom";

export const AuthLayout: React.FC = () => {
  return (
    <div
      className={`container 
       mx-auto 
       h-screen 
       flex-row 
       gap-0 
       max-w-[900px]
     `}
    >
      <div
        className={`flex 
      w-[50%] 
      h-full 
      justify-center 
      items-center`}
      >
        <AuthGreeting />
      </div>
      <Outlet />
    </div>
  );
};
