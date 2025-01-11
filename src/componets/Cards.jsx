import { Link } from "react-router-dom";
import "../App.css";
import DetailsPage from "../componets/DetailsPage.jsx";
const Cards = ({ img, name, album, genre, qtdMusics, id }) => {
  return (
    <div className="container_pai_cards">
      <div className="cards">
        <Link to={`/details/${id}`} className="pi pi-info-circle"></Link>
        <div className="cards_img">
          <img src={img} alt={name} />
        </div>{" "}
        <h2>{name}</h2>
        <p>Album: {album}</p>
        <p>Gênero: {genre}</p>
        <p>Quantidade: {qtdMusics} faixas...</p>
      </div>
    </div>
  );
};

export default Cards;
