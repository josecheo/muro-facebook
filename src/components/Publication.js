import React from "react";
import "./styles/Publication.css";
import like from "../img/like.png";
import comentar from "../img/comentar.png";
import share from "../img/share.png";
import avatar from "../img/avatar.png";

// import etiquetar from "../img/etiquetar.png";

class Publication extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Publication">
          <div className="Publication__header">
            <img className="Publication__avatar" src={avatar} alt="Logo"></img>

            <div className="Publication__name">
              <p>
                Jose Cheo <br />
                <span> 29 de enero a las 14:29</span>
              </p>
            </div>
          </div>
          <div className="Publication__post">Aqui va mi publicaiones</div>

          <div className="Publication__buttons--container">
            <div className="option--container">
              <img src={like} alt="subir media"></img>
              <span>Me gusta</span>
            </div>
            <div className="option--container">
              <img src={comentar} alt="subir media"></img>
              <span>comentar</span>
            </div>
            <div className="option--container">
              <img src={share} alt="subir media"></img>
              <span>Compartir</span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Publication;
