import React from "react";
import { Link } from "react-router-dom";
import "./styles/Login.css";

class Login extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="well login-box center-block">
          <h2 className="letras">Iniciar sesión</h2>
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
                Long in
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
