import { useState } from "react";
import { Login } from "../../components/Login.jsx";
import { Register } from "../../components/Register.jsx";
import "./authPage.css";
export const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleAuthPageToggle = () => {
    setIsLogin((prev) => !prev);
  };
  return (
    <div className="auth-container">
      {isLogin ? (
        <Login switchAuthHandler={handleAuthPageToggle} />
      ) : (
        <Register switchAuthHandler={handleAuthPageToggle} />
      )}
    </div>
  );
};

export default Auth;
