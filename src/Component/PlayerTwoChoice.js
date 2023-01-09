import React from "react";

const PlayerTwoChoice = ({onP2ChoiceMade}) => {

    const rockHandleClick = (event) => {
        onP2ChoiceMade(event.target.value)
    }

    const paperHandleClick = (event) => {
        onP2ChoiceMade(event.target.value)
    }

    const scissorsHandleClick = (event) => {
        onP2ChoiceMade(event.target.value)
    }

    return (
        <>
        <button onClick={rockHandleClick} value="rock">Rock</button>
        <button onClick={paperHandleClick} value="paper">Paper</button>
        <button onClick={scissorsHandleClick} value="scissors">Scissors</button>
        </>
    )
}

export default PlayerTwoChoice;