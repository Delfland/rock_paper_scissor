const AnnounceWinner = ({playerOne, playerTwo, p1Choice, p2Choice, winner}) => {
    
 
    
    return (
        <>
        <p>{playerOne} chose {p1Choice}</p>
        <p>{playerTwo} chose {p2Choice}</p>
        {winner}
        </>
    )
}

export default AnnounceWinner;