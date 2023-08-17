import { useState } from 'react'
import './App.css'
import Gess from './components/Gess'
import Keyboard from './components/Keyboard'

function App() {
  const [letter, setLetter] = useState<string>("")
  const [gesses, setGesses] = useState<string[]>([])

  
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const eventTarget = event.target as HTMLElement
    setLetter(eventTarget.innerText)
    validateGesses(eventTarget.innerText)
  }

  const validateGesses = (text: string) => {
    if(gesses.length === 0) {
      const gess = text
      setGesses([gess])
    }
    else {
      const gess = gesses[gesses.length -1]
      if(gess.length > 5) return
      setGesses([gess.concat(text)])
    }
    console.log(gesses)
  }

  return (
      <div className="page">
        <div className="container">
            <h1>Termo React</h1>
            <Gess letter={letter} />
            <Keyboard onClick={handleClick} />
        </div>
      </div>
  )
}

export default App
