import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Start.css";
import video from "../../image/video.webm";
import dinamita from "../../image/dinamita.png";
import ladrido from "../../image/ladrido.mp3";

const Start = () => {
  const [isHovered, setIsHovered] = useState(false);
  const audioRef = React.createRef();

  const handleMouseEnter = () => {
    setIsHovered(true);
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    audioRef.current.pause();
  };

  return (
    <div className="container-start">
      <video autoPlay playsInline muted loop>
        <source src={video} type="video/webm" />
      </video>
      <h1 className="start-title">THE DOG APP</h1>
      <h4 className="title-dinamita">
        Bienvenido al mundo de las razas de perros. <br />
        ¿Listo para explorar y aprender más? <br />
        Toca a Dinamita para adentrarte en esta aventura perruna.
        <br />
      </h4>
      <div
        className="link-dog"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link to={"/cucha"} className="link-dog">
          <img src={dinamita} alt="dinamita" />
          <audio ref={audioRef}>
            <source src={ladrido} type="" />
          </audio>
        </Link>
      </div>
    </div>
  );
};

export default Start;
