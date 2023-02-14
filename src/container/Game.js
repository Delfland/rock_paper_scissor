import React, {useState} from "react";
import NameForm from "../Component/NameForm";
import AnnounceWinner from "../Component/AnnounceWinner";
import PlayerOneChoice from "../Component/PlayerOneChoice";
import PlayerTwoChoice from "../Component/PlayerTwoChoice";
import ResultButton from "../Component/ResultButton";
import { SlButton } from "@shoelace-style/shoelace/dist/react";



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
            {winner?<AnnounceWinner playerOne={players[0]} playerTwo={players[1]} p1Choice={playerOneRPS} p2Choice={playerTwoRPS} winner={winner}/> :null}
        <h3>Player 1: {players[0]}</h3>
        <PlayerOneChoice onP1ChoiceMade={onP1ChoiceMade}/>
            {playerOneRPS? <p>Chosen</p>:null}
        <h3>Player 2: {players[1]}</h3>
        <PlayerTwoChoice onP2ChoiceMade={onP2ChoiceMade}/>
            {playerTwoRPS? <p>Chosen</p>:null}
        <div>
            <ResultButton playerOne={players[0]} playerTwo={players[1]} p1Choice={playerOneRPS} p2Choice={playerTwoRPS} onChoicesMade={onChoicesMade}/>
            <SlButton size="medium" onClick={handleClick} >New Game</SlButton>
        </div>
        </>
    )
}

export default Game;