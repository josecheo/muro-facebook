import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Post from "../components/Post";

class Home extends React.Component {
  render() {
    return (
      <div className="Container">
        <Post></Post>
      </div>
    );
  }
}

export default Home;
