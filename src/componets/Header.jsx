import { useState } from "react";
import Input from "./Input";
import spotifyIcone from "../assets/spotify.png";
import spotifyIconeHome from "../assets/casa.png";
import spotifyIconeWeb from "../assets/web-browser.png";
import "../App.css";
import Links from "./Links";
import CardsCircle from "./CardsCircle";
const Header = () => {
  const [isWhiteMode, setIsWhiteMode] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const time = new Date();
  const Times = () => {
    if (time.getHours() >= 0 && time.getHours() <= 12) {
      return <h1>Good Morning!</h1>;
    } else if (time.getHours() >= 13 && time.getHours() <= 18) {
      return <h1>Good Afternoon!</h1>;
    } else {
      return <h1>Good Night!</h1>;
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevState) => {
      const newState = !prevState;

      // Altera as cores de fundo e texto do body
      document.body.style.backgroundColor = newState ? "#050505" : "#ffffff";
      document.body.style.color = newState ? "#ffffff" : "#050505";

      return newState;
    });
  };

  const borderStyle = "1px solid black";

  return (
    <header className="container_header">
      <h1 className="titulo_hora">{Times()}</h1>
      <div className="container_imgs_header">
        <img className="spotify_icone" src={spotifyIcone} alt="" />
        <img className="spotify_icone_home" src={spotifyIconeHome} alt="" />
      </div>
      <div className="container_input">
        {isOpenSearch ? (
          <div className="pai_input">
            <i className="pi pi-search"></i>
            <Input placeholder="Buscar" border={borderStyle} />
            <i className="linha_vertical"></i>
            <i className="pai_web">
              <img
                className="spotify_icone_web"
                src={spotifyIconeWeb}
                alt="ícone de web"
              />
            </i>
          </div>
        ) : (
          <i onClick={() => setIsOpenSearch(true)} className="pi pi-search"></i>
        )}
      </div>
      <div className="container_login_singup">
        <p className="button_account">Sign up</p>
        <button className="button_login">Log in</button>
      </div>
    </header>
  );
};

export default Header;
