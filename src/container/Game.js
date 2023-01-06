import React, {useState} from "react";
import NameForm from "../Component/NameForm";


const Game = () => {

    const [players, setPlayers] = useState([])

    const onNamesSubmit = function(players) {
        setPlayers(players);
    }
    
    return (
        <>
        <h1>Rock Paper Scissors</h1>
        <NameForm onNamesSubmit={onNamesSubmit}/>
        <h4>Player 1: {players[0]}</h4>
        <button>Rock</button><button>Paper</button><button>Scissor</button>
        <h4>Player 2: {players[1]}</h4>
        <button>Rock</button><button>Paper</button><button>Scissor</button>
        </>
    )
}

export default Game;