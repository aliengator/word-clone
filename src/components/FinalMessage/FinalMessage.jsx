import React from "react";

function FinalMessage({status, answer, numOfGuesses}) {
  let message = ''
  const classes = `banner ${status === "running" ? "" : status === "win" ? "happy" : "sad"}`

  if (status === "win") {
    message = `
        <strong>Congratulations!</strong> Got it in <strong>${numOfGuesses === 1 ? "one guess" : `${numOfGuesses} guesses`}</strong>.
    `
  } else if (status === "lost") {
    message = `<p>Sorry, the correct answer is <strong>${answer}</strong>.</p>`
  }

  const markup = { __html: message };
  
  return (
    <div 
      className={classes}
    >
      <p dangerouslySetInnerHTML={markup} />
      <button onClick={() => window.location.reload()}><strong>Play again!</strong></button>
    </div>
  )
}

export default FinalMessage;
