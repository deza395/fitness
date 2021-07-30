import React from "react";
import logo from "../mimiLogo.png";

function Header() {
  return (
    <header>
      <div className="ToWrap">
        <div className="main-menu">
          <div className="logo-center">
            <img className="logo-main" src={logo} />
          </div>
          <div className="menu">
            {" "}
            <img className="image-top-menu" src="/nube1.png" />
            <p className="description-menu">
              {" "}
              Somos una empresa familiar dedicada a brindar servicios para
              fiestas infantiles. Ofrecemos distintos tipos de juegos inflables,
              juego de salón y todo el equipamiento necesario para fiestas de
              karaoke. Comunicate con nosotros para darle vida a tus fiestas
            </p>
            <img className="image-bottom-menu" src="/nube2.png" />
          </div>
        </div>
        <div className="bottom-menu"></div>
      </div>
    </header>
  );
}

export default Header;
