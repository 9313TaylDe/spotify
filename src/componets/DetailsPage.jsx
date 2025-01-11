import { Lista } from "./Lista";
import Cards from "./Cards";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const [produto, setProduto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const produtoEcontrado = Lista.find(
      (produto) => produto.id === parseInt(id)
    );
    setProduto(produtoEcontrado);
  }, [id]);

  if (!produto) {
    return <p>Produto não encontrado</p>;
  }

  return (
    <div className="details">
      <h1>{produto.name}</h1>
      <div className="details_img">
        <img src={produto.img} alt={produto.name} />
      </div>
      <p>Álbum: {produto.album}</p>
      <p>Gênero: {produto.genre}</p>
      <p>Quantidade de faixas: {produto.qtdMusics}</p>
    </div>
  );
};

export default DetailsPage;
