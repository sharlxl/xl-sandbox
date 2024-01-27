import React, { useContext } from "react";
import { LoginForm } from "../../components/LoginForm";
import { AuthContext } from "../../App";
import { AuthHomePage } from "./AuthHomePage";

export const Home = ({ setIsLogin }: any) => {
  const isLogin = useContext(AuthContext);

  return (
    <>
      {isLogin ? (
        <AuthHomePage setIsLogin={setIsLogin} />
      ) : (
        <LoginForm setIsLogin={setIsLogin} />
      )}
    </>
  );
};
