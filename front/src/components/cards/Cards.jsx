import React, { useState } from "react";
import './Cards.css';
import CardDetailModal from "./CardDetailModal";

const Card = ({ game }) => {
  const [showDetail, setShowDetail] = useState(false);

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  }
  return (
    <div className="card">
      <div className="card-image">
        <img src={game.image} alt={game.name} />
      </div>
      <div className="card-info">
        <h3>{game.name}</h3>
        <p>Genero: {game.gender}</p>
        <p>Productora: {game.game_producer}</p>
        <button onClick={toggleDetail}>
          {showDetail ? "Ocultar Detalle" : "Detalle"}
        </button>
      </div>
      {showDetail && (
        <CardDetailModal game={game} onCloseClick={toggleDetail} />
      )}
    </div>
  );
};

export default Card;
