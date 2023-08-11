import React from "react";

function GuessInput({ guesses, setGuesses, checkIfCorrect, gameStatus }) {
  const [guess, setGuess] = React.useState("")

  return (
    <form 
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault()
        checkIfCorrect(guess)
        const guessWords = [...guesses, guess]

        setGuesses(guessWords)
        setGuess("")
        console.log(guessWords)
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        required
        disabled={gameStatus !== "running"}
        id="guess-input"
        type="text"
        pattern=".{5,5}"
        maxLength={5}
        value={guess}
        onChange={(e) => {
          const character = e.target.value.toUpperCase()
          setGuess(character)
        }}
      />
    </form> )
}

export default GuessInput;
