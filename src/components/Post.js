import React from "react";
import "./styles/Post.css";
import avatar from "../img/avatar.png";
import galeria from "../img/galeria.svg";
import etiquetar from "../img/etiquetar.png";

class Post extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Post">
          <div className="Post__card-header">Crear publicación </div>
          <img className="Post__avatar" src={avatar} alt="Logo"></img>

          <textarea
            className="Post_textarea"
            placeholder="¿Que estas pensando, Jose?"
          ></textarea>

          <div className="Post__buttons--container">
            <div className="upload_photo--container">
              <img src={galeria} alt="subir media"></img>
              <span>Foto/video</span>
            </div>

            <div className="upload_photo--container">
              <img src={etiquetar} alt="etiquetar amigos"></img>
              <span>Etiquetar</span>
            </div>
          </div>
          <div className="button">Publicar</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Post;
