import React from 'react';
import { Link } from "react-router-dom";
class Login extends React.Component{

render(){

    return (

<div>
        
        <form >
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
              type="text"
              name="twitter"
           
            />
          </div>

          <Link
                  className=""
                  to={`/muro`}
                >
                  Login
                </Link>


         
        </form>
     </div>




    )
}


}
export default Login