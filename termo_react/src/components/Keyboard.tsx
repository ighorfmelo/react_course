import './Keyboard.css'

function Keyboard() {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Del', 'Ok']

  return (
    <div className="keyboard">
      {
        letters.map((letter) => {
          return <div className={`keyboard-letter ${letter === 'Ok' ? "ok" : ""}`}>{letter}</div>
        })
      }
    </div>
  )
}

export default Keyboard