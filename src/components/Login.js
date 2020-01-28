import React from "react";
import { Link } from "react-router-dom";
import "./styles/Login.css";
import Logo from "../img/muu.PNG";

class Login extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="well login-box center-block">
          <img className="logo" src={Logo} alt="Logo"></img>
          <form name="login">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
            />
            <input
              type="Password"
              className="form-control"
              placeholder="Password"
            />
            <div>
              <Link className="btn btn-primary" to={`/Muro`}>
                Iniciar sesión
              </Link>
            </div>
          </form>

          <p className="olvido-password">
            <Link to={`/ResetPaswword`}>¿Olvidaste tu contraseña?</Link>
          </p>

          <span>¿No tienes una cuenta? </span>
          <Link to={`/Register`}>Regístrate</Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
