import { SlButton } from '@shoelace-style/shoelace/dist/react';

const ResultButton = ({playerOne, playerTwo, p1Choice, p2Choice, onChoicesMade}) => {

    const result = (choices) => {
        if (choices === ['rock', 'rock'] || choices === ['paper', 'paper'] || choices === ['scissors', 'scissors']) {
                onChoicesMade("It's a tie");
            }
        else if (choices === ['rock', 'scissors'] || choices === ['paper', 'rock'] || choices === ['scissors', 'paper']) {
                onChoicesMade(`${playerOne} wins!`);
            }
        else {
                onChoicesMade(`${playerTwo} wins!`);
        }
    }

    const handleClick = () => {
        const choices = [p1Choice, p2Choice]
        console.log(result(choices))
    }

    return (
        <SlButton size="medium" onClick={handleClick} >Winner?</SlButton>
    )
}

export default ResultButton;