import React, {useState} from "react";
import NameForm from "../Component/NameForm";
import AnnounceWinner from "../Component/AnnounceWinner";
import PlayerOneChoice from "../Component/PlayerOneChoice";
import PlayerTwoChoice from "../Component/PlayerTwoChoice";
import ResultButton from "../Component/ResultButton";



const Game = () => {

    const [players, setPlayers] = useState([])
    const [playerOneRPS, setPlayerOneRPS] = useState("")
    const [playerTwoRPS, setPlayerTwoRPS] = useState("")
    const [winner, setWinner] = useState("")

    const onNamesSubmit = function(players) {
        setPlayers(players)
    }

    const onP1ChoiceMade = function(choice) {
        setPlayerOneRPS(choice)
    }

    const onP2ChoiceMade = function(choice) {
        setPlayerTwoRPS(choice)
    }

    const onChoicesMade = function(result) {
        setWinner(result)
    }

    const handleClick = () => {
        setPlayers([]);
        setPlayerOneRPS("");
        setPlayerTwoRPS("");
        setWinner("");
    }


    return (
        <>
        <h1>Rock Paper Scissors</h1>
        <NameForm onNamesSubmit={onNamesSubmit}/>
        <h4>Player 1: {players[0]}</h4>
        <PlayerOneChoice onP1ChoiceMade={onP1ChoiceMade}/>
        {playerOneRPS? <p>Chosen</p>:null}
        <h4>Player 2: {players[1]}</h4>
        <PlayerTwoChoice onP2ChoiceMade={onP2ChoiceMade}/>
        {playerTwoRPS? <p>Chosen</p>:null}
        <ResultButton playerOne={players[0]} playerTwo={players[1]} p1Choice={playerOneRPS} p2Choice={playerTwoRPS} onChoicesMade={onChoicesMade}/>
        {winner?<AnnounceWinner playerOne={players[0]} playerTwo={players[1]} p1Choice={playerOneRPS} p2Choice={playerTwoRPS} winner={winner}/> :null}
        <button onClick={handleClick}>New Game</button>
        </>
    )
}

export default Game;