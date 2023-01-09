import { Children } from "react"

const AnnounceWinner = ({playerOne, playerTwo, p1Choice, p2Choice}) => {
    
 
    
    return (
        <>
        <p>{playerOne} chose {p1Choice}</p>
        <p>{playerTwo} chose {p2Choice}</p>
        {/* <h3>{Children}</h3> */}
        </>
    )
}

export default AnnounceWinner;