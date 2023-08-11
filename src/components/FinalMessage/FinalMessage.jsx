import React from "react";


function FinalMessage({gameStatus}) {
    const happyMessage =  `
      <div class="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>3 guesses</strong>.
        </p>
      </div>
    `
    const sadMessage = `
      <div class="sad banner">
        <p>Sorry, the correct answer is <strong>LEARN</strong>.</p>
      </div>
    `
    const [message, setMessage] = React.useState('')
  
    if (gameStatus === "win") return `<p>${happyMessage}</p>`
    if (gameStatus === "lost") return `<p>${sadMessage}</p>`
    
    return <p/>
}

export default FinalMessage;
