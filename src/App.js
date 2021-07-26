
import { useState } from 'react';
import calculateWinner from './component/helper'
import Board from './component/Board';


function App() {

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);


  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? 'X' : 'O';

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];

    if (winner || squares[i])
      return;
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length );
    setXisNext(!xIsNext);
  }

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0)

  };
  const renderMove = () => {
    return history.map((_step, move) => {

      const destination = move ? `Go To Move #${move}` : 'Go To Start';
      return (
        <li key={move} style={{ listStyle: 'none' }}>
          <button style={{ textAlign: 'center' }} onClick={() => jumpTo(move)}>{destination}</button>

        </li>

      )
    })
  }




  return (
    <>
      <h1>React Tic Toc Toe Game</h1>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div>
        <div>
          <h3>History</h3>
          <h3 style={{ textAlign: 'center' }}>{winner ? "Winner:" + winner : "Next Player:" + xO}</h3>

          {renderMove()}
        </div>

      </div>


    </>
  );
}

export default App;

