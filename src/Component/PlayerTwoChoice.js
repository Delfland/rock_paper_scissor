import React, {useState} from "react";

const PlayerTwoChoice = () => {

    const [playerTwoSelects, setPlayerTwoSelects] = useState("")

    const rockHandleClick = (event) => {
        setPlayerTwoSelects(event.target.value)
    }

    const paperHandleClick = (event) => {
        setPlayerTwoSelects(event.target.value)
    }

    const scissorHandleClick = (event) => {
        setPlayerTwoSelects(event.target.value)
    }

    return (
        <>
        <button onClick={rockHandleClick} value="rock">Rock</button>
        <button onClick={paperHandleClick} value="paper">Paper</button>
        <button onClick={scissorHandleClick} value="scissor">Scissor</button>
        </>
    )
}

export default PlayerTwoChoice;