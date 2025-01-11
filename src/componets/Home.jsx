import "primeicons/primeicons.css";
import { Lista } from "./Lista";
import Cards from "./Cards";
import "../App.css";
import "primeicons/primeicons.css";
import spotifyLibraryIcon from "../assets/library.png";
import { useState } from "react";
import Footer from "./Footer";
import Products from "./Products";
import CardsCircle from "./CardsCircle";
const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const DarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.backgroundColor = isDarkMode ? "#ffffff" : "#050505";
    document.body.style.color = isDarkMode ? "#050505" : "#ffffff";
  };
  return (
    <div className="container-pai" id="container_pai">
      <button
        onClick={DarkMode}
        className={`pi ${isDarkMode ? " pi-sun" : " pi-moon"}`}
      ></button>
      <section className="section_library">
        <div className="container_library">
          <img
            className="spotify_icone_library"
            src={spotifyLibraryIcon}
            alt=""
          />
          <h2>Yout Library</h2>
          <i className="pi pi-plus"></i>
        </div>
        <div className="container_divs_library">
          <div class="inner-div">
            <h2>Create your first playlist</h2>
            <p>It's easy, we'll help you</p>
            <button className="button_create_playlist">Create playlist</button>
          </div>
          <div class="inner-div">
            <h2>Let's find some podcasts to follow</h2>
            <p>We'll keep you updated on new episodes</p>
            <button className="button_search_podcasts">Search podcasts</button>
          </div>
          <div class="inner-div">
            <h2>Create your first playlist</h2>
            <p>It's easy, we'll help you</p>
            <button className="button_create_playlist">Create playlist</button>
          </div>
          <div class="inner-div">
            <h2>Let's find some podcasts to follow</h2>
            <p>We'll keep you updated on new episodes</p>
            <button className="button_search_podcasts">Search podcasts</button>
          </div>
        </div>
        <div className="container_sections_library">
          <p>Legal</p>
          <p>Safety & Privacy Center</p>
          <p>Privacy Policy</p>
          <p>Cookies</p>
          <p>About Ads</p>
          <p>Acessibility</p>
        </div>
      </section>
      <section className="conteudo">
        <CardsCircle />
        <Products />
        <Footer />
      </section>
    </div>
  );
};

export default Home;
