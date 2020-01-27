import React from 'react'
import Login from '../components/Login'
import "./styles/Home.css"
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends React.Component{
render(){
    return (

<div className="Home">
<div className ="Home__container">
    <div className="Home__container-login">
    <Login/>

    </div>

</div>
</div>

    )


}

}

export default Home;