import React from "react";
import Login from "../components/Login";
import "./styles/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Login />
      </div>
    );
  }
}

export default Home;
