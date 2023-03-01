import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const content = (
    <div className="text-center m-6  h-[400px] text-3xl">
      <h1>Welcome</h1>
      <Link to="/">Logout</Link>
    </div>
  );
  return content;
};

export default Login;
