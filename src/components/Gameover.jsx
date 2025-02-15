import React from 'react'

const Gameover = ({winner ,onrestart}) => {


  return (
    <div id='game-over'>
        <h2>Game over!</h2>
        {winner && <p>{winner} won!</p>}
        {!winner && <p>Game drawn!</p>}
        <p>
            <button onClick={onrestart}>Rematch!</button>
        </p>
      
    </div>
  )
}

export default Gameover
