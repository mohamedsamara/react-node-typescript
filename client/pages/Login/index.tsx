import React, { FC } from "react";
import { Link } from "react-router-dom";

const Login: FC = () => {
  return (
    <div>
      <h1>Login</h1>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
};

export default Login;
