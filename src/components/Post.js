import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXing } from "@fortawesome/free-brands-svg-icons";
import "./styles/Post.css";

class Post extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Post">
          <div className="Post__card-header">Crear publicación </div>
          <div className="Post__avatar"> </div>
          <div className="Post_textarea text-area"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default Post;
