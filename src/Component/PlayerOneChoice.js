import React, {useState} from "react";

const PlayerOneChoice = () => {

    const [playerOneSelects, setPlayerOneSelects] = useState("")

    const rockHandleClick = (event) => {
        setPlayerOneSelects(event.target.value)
    }

    const paperHandleClick = (event) => {
        setPlayerOneSelects(event.target.value)
    }

    const scissorHandleClick = (event) => {
        setPlayerOneSelects(event.target.value)
    }

    return (
        <>
        <button onClick={rockHandleClick} value="rock">Rock</button>
        <button onClick={paperHandleClick} value="paper">Paper</button>
        <button onClick={scissorHandleClick} value="scissor">Scissor</button>
        </>
    )
}

export default PlayerOneChoice;