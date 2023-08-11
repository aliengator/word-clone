import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function RenderingGuess({guesses, answer}) {
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
      {
        guesses.map(guess => {
          const letters = checkGuess(guess, answer)
          
          return (
            <p 
              className="guess"
              key={Math.random()}
            >
              {
                letters.map(({letter, status}) => {
                  const classes = `cell ${status}`
                  
                  return (
                    <span 
                      className={classes}
                      key={Math.random()}
                      correct = {status === 'correct' ? '' : null}
                      incorrect = {status === 'incorrect' ? '' : null}
                      misplaced = {status === 'misplaced' ? '' : null}
                    >
                      {letter}
                    </span>
                  )
                })
              }
            </p>
          )
        })
      }

      {blankRows()}
    </div>
  )
}

export default RenderingGuess;
