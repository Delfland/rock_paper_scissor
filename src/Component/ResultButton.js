import { SlButton } from '@shoelace-style/shoelace/dist/react';

const ResultButton = ({playerOne, playerTwo, p1Choice, p2Choice, onChoicesMade}) => {

    const getResult = (choices) => {
        switch (choices) {
            case 'rock rock':
            case 'paper paper':
            case 'scissors scissors':
                onChoicesMade("It's a tie");
        break;
            case 'rock scissors':
            case 'paper rock':
            case 'scissors paper':
                onChoicesMade(`${playerOne} wins!`);
        break;
            case 'scissors rock':
            case 'rock paper':
            case 'paper scissors':
                onChoicesMade(`${playerTwo} wins!`);
        break;
            default:
                onChoicesMade('No choices to compute, please select your choices.')
    }
}

    const handleClick = () => {
        const choices = p1Choice + " " + p2Choice;
        getResult(choices)
    }

    return (
        <SlButton size="medium" onClick={handleClick} >Winner?</SlButton>
    )
}

export default ResultButton;