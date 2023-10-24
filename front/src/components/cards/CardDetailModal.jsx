import React from "react";
import "./Cards.css";

const CardDetailModal = ({ game, onCloseClick }) => {
  return (
    <div className="card-detail-modal">
      <div className="card-info">
        <h1>Juego Seleccionado</h1>
        <h3>{game.name}</h3>
        <p>Productora: {game.game_producer}</p>
        <p>Genero: {game.gender}</p>
        <p>Descripcion: {game.description}</p>
        <p>Lanzamiento: {game.release}</p>
        <p>Edad mínima: {game.age}</p>
        <p>Plataformas: {game.platform}</p>
        <button onClick={onCloseClick}>Cerrar</button>
      </div>
    </div>
  );
};

export default CardDetailModal;
