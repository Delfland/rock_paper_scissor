import React from "react";

const PlayerOneChoice = ({onP1ChoiceMade}) => {

    const rockHandleClick = (event) => {
        onP1ChoiceMade(event.target.value)
    }

    const paperHandleClick = (event) => {
        onP1ChoiceMade(event.target.value)
    }

    const scissorsHandleClick = (event) => {
        onP1ChoiceMade(event.target.value)
    }


    return (
        <>
        <button onClick={rockHandleClick} value="rock">Rock</button>
        <button onClick={paperHandleClick} value="paper">Paper</button>
        <button onClick={scissorsHandleClick} value="scissors">Scissors</button>
        </>
    )
}

export default PlayerOneChoice;