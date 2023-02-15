import React, {useState} from "react";
import NameForm from "../component/NameForm";
import AnnounceWinner from "../component/AnnounceWinner";
import PlayerOneChoice from "../component/PlayerOneChoice";
import PlayerTwoChoice from "../component/PlayerTwoChoice";
import ResultButton from "../component/ResultButton";
import { SlButton } from "@shoelace-style/shoelace/dist/react";
import { ButtonContainer, ControlsContainer, FormContainer, GameContainer, PlayerOneContainer, PlayerTwoContainer, TitleContainer } from "../styles/gameStyles";



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
    
        <GameContainer>
            <TitleContainer>
                <h1>Rock Paper Scissors</h1>
            </TitleContainer>
            <FormContainer>
                <NameForm onNamesSubmit={onNamesSubmit}/>
                <ButtonContainer>
                    {winner?<AnnounceWinner playerOne={players[0]} playerTwo={players[1]} p1Choice={playerOneRPS} p2Choice={playerTwoRPS} winner={winner}/> :
                    <ResultButton playerOne={players[0]} playerTwo={players[1]} p1Choice={playerOneRPS} p2Choice={playerTwoRPS} onChoicesMade={onChoicesMade}/>}
                </ButtonContainer>
            </FormContainer>
            <PlayerOneContainer>
                <h3>Player 1: {players[0]}</h3>
                <PlayerOneChoice onP1ChoiceMade={onP1ChoiceMade}/>
                    {playerOneRPS? <p>Chosen</p>:null}
            </PlayerOneContainer>
            <PlayerTwoContainer>
                <h3>Player 2: {players[1]}</h3>
                <PlayerTwoChoice onP2ChoiceMade={onP2ChoiceMade}/>
                    {playerTwoRPS? <p>Chosen</p>:null}
            </PlayerTwoContainer>
            <ControlsContainer>
                
                <SlButton size="medium" onClick={handleClick} >New Game</SlButton>
            </ControlsContainer>
        </GameContainer>
    
    )
}

export default Game;