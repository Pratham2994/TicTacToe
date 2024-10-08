import React, { useState } from 'react'

const Gameboard = ({gboard,onselectsquare}) => {

    // const [board,setboard]=useState(initialboard);

    // function handleBoard(rowIndex,colIndex){
    //     setboard((prevboard)=>{
    //         const updated=[...prevboard.map(inner=>[...inner])];
    //         updated[rowIndex][colIndex]=activeCurr;
    //         return updated;
    //     })
    //     onselectsquare();

    // }
  return (
    <ol id='game-board'>
        {gboard.map((row,rowIndex)=>(
            <li key={rowIndex}>
                <ol>
                    {row.map((col,colIndex)=>(
                        <li key={colIndex}>
                            <button onClick={()=>onselectsquare(rowIndex,colIndex)}>{col}</button>
                        </li>
                    ))}
                </ol>
            </li>
        ))}
    </ol>
  )
}

export default Gameboard
