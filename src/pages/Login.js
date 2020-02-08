import React from "react";
import LoginForm from "../components/LoginForm";
import "./styles/Login.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Login extends React.Component {
  render() {
    return (
      <div className="Container">
        <LoginForm />
      </div>
    );
  }
}

export default Login;
