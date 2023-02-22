import { render, screen } from '@testing-library/react';
import App from '../App';
import NameForm from '../component/NameForm';
import userEvent from '@testing-library/user-event';

describe("<NameForm />", () => {
 
    test('render player1 input', () => {
      render(<NameForm />);
   
      const inputPlayerOne = screen.getByTestId("player1");
      userEvent.type(inputPlayerOne, "Delph");
      expect(inputPlayerOne).toBeInTheDocument();
      expect(screen.getByTestId("player1")).toHaveValue("Delph");     
    })

    test('render player2 input', () => {
        render(<NameForm />);
     
        const inputPlayerTwo = screen.getByTestId("player2");
        userEvent.type(inputPlayerTwo, "Eden");
        expect(inputPlayerTwo).toBeInTheDocument();
        expect(screen.getByTestId("player2")).toHaveValue("Eden");     
      })


})