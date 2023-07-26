import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  return (
  <form 
    className="guess-input-wrapper"
    onSubmit={(e) => {
      e.preventDefault()
      console.log(`guess: ${guess}`)
      setGuess("")
    }}
  >
    <label htmlFor="guess-input">Enter guess:</label>
    <input 
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
