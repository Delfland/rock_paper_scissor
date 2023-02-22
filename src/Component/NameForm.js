import React, {useState} from "react";

const NameForm = ({onNamesSubmit}) => {

    const [playerOne, setPlayerOne] = useState("");
    const [playerTwo, setPlayerTwo] = useState("");

    const handleNameChangeOne = (event) => {
        setPlayerOne(event.target.value);
    }

    const handleNameChangeTwo = (event) => {
        setPlayerTwo(event.target.value);
    }

    const handleNamesSubmit = (event) => {
        event.preventDefault();
        const newPlayers = [playerOne, playerTwo];
        onNamesSubmit(newPlayers);

        setPlayerOne("");
        setPlayerTwo("");
    }

    

    return (
        <form onSubmit={handleNamesSubmit}>
            <input
            data-testid="player1"
            type="text"
            placeholder="Enter Player 1"
            value={playerOne}
            onChange={handleNameChangeOne}
            />
            <input
            data-testid="player2"
            type="text"
            placeholder="Enter Player 2"
            value={playerTwo}
            onChange={handleNameChangeTwo}
            />
            <input
            type="submit"
            value="Submit"
            />
        </form>
    )
}

export default NameForm;