import React from 'react';
import { Link } from "react-router-dom";
import './styles/Login.css'
class Login extends React.Component{


render(){

    return (
   
      <div>

       
        <form className="container">
          <div className ="container-fluid"> 
           <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="text"
              name="email"
               />
          </div>
            <div className="form-group">
            <label>Contraseña</label>
            <input
       
              className="form-control"
              type="password"
              name="twitter"
           
            />
          </div>

          <Link
                  className="btn btn-primary container"
                  to={`/muro`}
                >
                  Login
                </Link>

                </div>
         
        </form>
        </div>
      




    )
}


}
export default Login