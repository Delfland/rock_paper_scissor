import React from "react";
import { SlButton, SlButtonGroup } from '@shoelace-style/shoelace/dist/react';

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
        <SlButtonGroup label="Alignment">
        <SlButton size="medium" onClick={rockHandleClick} value="rock">Rock</SlButton>
        <SlButton size="medium" onClick={paperHandleClick} value="paper">Paper</SlButton>
        <SlButton size="medium" onClick={scissorsHandleClick} value="scissors">Scissors</SlButton>
        </SlButtonGroup>
        </>
    )
}

export default PlayerOneChoice;