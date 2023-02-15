import styled from "styled-components";

export const GameContainer = styled.div`
  display: grid;
  grid-template-columns: 35% 30% 35%;
  grid-template-rows: 10% 35% 15% 40%;
  min-height: 100%;
  min-width: 1024px;
  width: 100%;
  height: auto;
`;

export const TitleContainer = styled.div`
    grid-column-start: 2;
    text-align: center;
    font-size: 1.2rem;
    padding: 0%;
    margin: 1%;
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    grid-column-start: 2;
    grid-row-start: 2;
    margin: 0.5%;
    text-align: center;
    font-size: 1.2rem;
`;

export const PlayerOneContainer = styled.div`
    grid-column-start: 1;
    grid-row-start: 4;
    margin: 3%;
    text-align: center;
    font-size: 1.5rem;
`;

export const PlayerTwoContainer = styled.div`
    grid-column-start: 3;
    grid-row-start: 4;
    margin: 3%;
    text-align: center;
    font-size: 1.5rem;
`;

export const ControlsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    grid-column-start: 2;
    grid-row-start: 4;
    margin: 5%;
    text-align: center;
`;

export const ButtonContainer = styled.div`
    margin: 0;
    text-align: center;
`;