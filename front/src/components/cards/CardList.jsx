import React, { useState, useEffect } from "react";
import GameCard from "./Cards";
import CardDetailModal from "../cards/CardDetailModal";

const GameList = () => {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    const fetchgames = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };
    fetchgames();
  }, []);

  const handleDetailClick = (game) => {
    setSelectedGame(game);
  };

  const handleDetailClose = () => {
    setSelectedGame(null);
  }
  return (
  <div className="game-list">
    <img src="" alt="" />
    <div className="game-grid">
      {selectedGame && (
        <CardDetailModal
          game={selectedGame}
          onCloseClick={handleDetailClose}
        />
      )}
      {games &&
        games.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            onDetailClick={handleDetailClick}
          />
        ))}
    </div>
  </div>
  );
};

export default GameList;
