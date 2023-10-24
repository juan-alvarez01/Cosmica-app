import { useState } from "react";
import GameForm from '../../gameForm/gameForm'; 
import GameList from '../../cards/CardList';
import { GameProvider } from '../../../context/GameContext';
import MainLayout from '../../layout/MainLayout'
import "../../cards/Cards.css"

//Falta cambiar los imports

export default function CreateForm() {
    const [games, setGame] = useState([]);

    const addGame = (game) => {
        setGame([...games, game]);
    }
    return(
    <MainLayout>
        <GameProvider addGame={addGame}>
            <GameForm/>  
            {games.length > 0 ? <h1>Juegos Agregados</h1> : null}
            <GameList games={games} />
        </GameProvider>
    </MainLayout>
    )
} 