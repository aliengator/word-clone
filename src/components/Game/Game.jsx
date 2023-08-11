import React from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import RenderingGuess from '../RenderingGuess/RenderingGuess';
import FinalMessage from '../FinalMessage/FinalMessage';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const [gameStatus, setGameStatus] = React.useState("running")

  function checkIfCorrect(guess) {
    if (guess === answer) {
      setGameStatus("win")
    } else if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost")
    }
  }

  return <>
    <RenderingGuess 
      guesses={guesses}
      answer={answer}
    />
    <FinalMessage 
      gameStatus={gameStatus}
    />
    <GuessInput 
      guesses={guesses}
      setGuesses={setGuesses}
      checkIfCorrect={checkIfCorrect}
      gameStatus={gameStatus}
    />
  </>
}

export default Game;
