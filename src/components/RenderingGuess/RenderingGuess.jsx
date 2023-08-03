import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function RenderingGuess({guesses}) {
  function blankRows() {
    return range(NUM_OF_GUESSES_ALLOWED - guesses.length).map((_) => (
      <p 
        className="guess"
        key={Math.random()}
      >
        {range(5).map( () => <span key={Math.random()} className="cell"></span>)}
      </p>
    ));
  }

  return (
    <div className="guess-results">
      {guesses.map(guess => (
        <p 
          className="guess"
          key={Math.random()}
        >
          {guess.split('').map(cell => (
            <span 
              className="cell"
              key={Math.random()}
            >
              {cell}
            </span>
          ))}
        </p>
      ))}

      {blankRows()}
    </div>
  )
}

export default RenderingGuess;
