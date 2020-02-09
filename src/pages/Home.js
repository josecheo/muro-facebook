import React from "react";

// import "bootstrap/dist/css/bootstrap.min.css";
import Post from "../components/Post";
import "./styles/Home.css";
import Publication from "../components/Publication";

class Home extends React.Component {
  render() {
    return (
      <section className="Hero">
       <div className="Home__container">
        <Post></Post>
        <Publication></Publication>
        </div>
        </section>
    );
  }
}

export default Home;
