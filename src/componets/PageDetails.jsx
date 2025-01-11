import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Lista } from "./Lista";
import "../App.css";
import "primeflex/primeflex.css";

const PageDetails = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [produto, setProduto] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const produtoEcnontrado = Lista.find(
      (produto) => produto.id === parseInt(id)
    );

    setProduto(produtoEcnontrado);
  }, [id]);
  if (!produto) {
    return <h2>Carregando...</h2>;
  }

  const DarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.backgroundColor = isDarkMode ? "#ffffff" : "#050505";
    document.body.style.color = isDarkMode ? "#050505" : "#ffffff";
  };
  return (
    <div className="container_details relative">
      <Link to="/">Voltar</Link>
      <button onClick={DarkMode} className="pi pi-play"></button>
      <div className="details relative">
        <div className="details_img">
          <img src={produto.img} alt={produto.name} />
        </div>
        <h1>{produto.name}</h1>
        <p>Álbum: {produto.album}</p>
        <p>Gênero: {produto.genre}</p>
        <p>Quantidade de faixas: {produto.qtdMusics}</p>
      </div>
    </div>
  );
};

export default PageDetails;
