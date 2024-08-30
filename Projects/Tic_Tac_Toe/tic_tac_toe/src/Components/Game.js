import { useState, useEffect } from 'react';
import Board from './Board';
import Reset from './Reset';
import Style from './Game.module.css';

function Game() {
    const [check, setCheck] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    const [moves, setMoves] = useState([]);
    const [currentMove, setCurrentMove] = useState(0);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentSquares, setCurrentSquares] = useState(history[currentMove]);
  
    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setCheck(0);
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
        setXIsNext(!xIsNext);
    }
  
    function jumpTo(nextMove) {
        setCheck(0);
        setCurrentMove(nextMove);
        setXIsNext(nextMove % 2 === 0);
    }

    function handleReset(){
        const resetSquare = Array(9).fill(null);
        setCheck(1);
        setCurrentSquares(resetSquare);
        setHistory([Array(9).fill(null)]);
    }

    useEffect(() => {
        if(!check) {
            const temp = history[currentMove];
            setCurrentSquares(temp);
        }
        setMoves(history.map((squares, move) => {
            let description;
            if (move > 0) {
                description = 'Go to move #' + move;
            } else {
                description = 'Go to game start';
            }
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{description}</button>
                </li>
            );
        }));
    }, [currentMove, history, check]);
  
    return (
        <div className={Style.game}>
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
                <Reset onResetClick={() => handleReset()}/>
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    );
};

export default Game;