import Player from "./components/Player";
import Gameboard from "./components/Gameboard";
import { useState } from "react";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winningcombinations";

import Gameover from "./components/Gameover";

function App() {
  const [players, setplayers] = useState({
    'X':'Player 1',
    'O':'Player 2'
  })
  const [gameturns, setgameturns] = useState([])
  const [active, setActive] = useState('X');

  
  const initialboard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  let board = initialboard;

  for (const turn of gameturns) {
    const { square, player } = turn;
    const { row, col } = square;
    board[row][col] = player;

  }
  let winner=null;
  for(const combination of WINNING_COMBINATIONS){
    const first=board[combination[0].row][combination[0].column];
    const second=board[combination[1].row][combination[1].column];
    const third=board[combination[2].row][combination[2].column];

    if(first && first===second && first===third){
      winner=first;
    }
  }


  const hasdraw=gameturns.length==9&&!winner;

  function handlerestart(){
    setgameturns([]);
  }

  function handlePlayerchange(symbol,name){
    setplayers((old)=>{

      const updatedpl={...old,[symbol]:name};
      return updatedpl;
    })
  }

  function handleActive(rowIndex, colIndex) {
    let a = 1;
    for (const turn of gameturns) {
      const { square, player } = turn;
      const { row, col } = square;
      if (player === 'X' || player === 'O') {
        if (row == rowIndex && col == colIndex) {
          a = 0;
        }
      }

    }
    if (a === 1) {
      setActive((curractive) => (curractive == 'X') ? 'O' : 'X');

      setgameturns((prevgameturn) => {
        let currplayer = 'X';
        if (prevgameturn.length > 0 && prevgameturn[0].player === 'X') {
          currplayer = 'O';
        }
        const updatedGame = [{ square: { row: rowIndex, col: colIndex }, player: currplayer }, ...prevgameturn];
        return updatedGame;
      })
    }


  }
  return (
    <main>
      <header>
        <img src="../public/game-logo.png" alt="logo" />
        <h1>Tic Tac Toe</h1>
      </header>
      <div id="game-container">
        <ol id="players" className="highlight-player" >
          <Player change={handlePlayerchange} isActive={active == 'X'} iName="Player 1" symbol="X" />
          <Player change={handlePlayerchange} isActive={active == 'O'} iName="Player 2" symbol="O" />
        </ol>
        {(winner||hasdraw) && <Gameover winner={players[winner]} onrestart={handlerestart} />}
        <Gameboard gboard={board} onselectsquare={handleActive} />
      </div>
      <Log turns={gameturns} />
    </main>
  )
}

export default App
