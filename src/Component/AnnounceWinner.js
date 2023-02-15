const AnnounceWinner = ({playerOne, playerTwo, p1Choice, p2Choice, winner}) => {
    
 
    
    return (
        <>
        <p>{playerOne} chose {p1Choice} <br/>
        {playerTwo} chose {p2Choice} <br/>
        {winner}</p>
        </>
    )
}

export default AnnounceWinner;