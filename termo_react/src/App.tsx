import { useState } from 'react'
import './App.css'
import Gess from './components/Gess'
import Keyboard from './components/Keyboard'

function App() {
  const [gess, setGess] = useState<string>("")
  const [gesses, setGesses] = useState<string[]>([])

  
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const eventTarget = event.target as HTMLElement
    const text = eventTarget.innerText
    let finalGess = ""
    if (text == 'Ok') {
      setGess('')
      setGesses(gesses.concat(['']))
      return
    }
    if (text == 'Del') {
      finalGess = gess.slice(0, -1)
      setGess(finalGess)
      addGess(finalGess)
      return
    }
    if(gess.length >= 5) return
    finalGess = gess.concat(text)
    setGess(finalGess)
    addGess(finalGess)
  }

  const addGess = (text: string) => {
    if(gesses.length == 0) {
      setGesses([text])
    }
    else {
      setGesses([...gesses.slice(0, -1), text])
    }
  }

  return (
      <div className="page">
        <div className="container">
            <h1>Termo React</h1>
            <Gess gesses={gesses} />
            <Keyboard onClick={handleClick} />
        </div>
      </div>
  )
}

export default App
