import { useEffect, useState } from 'react'
import './App.css'
import Gess from './components/Gess'
import Keyboard from './components/Keyboard'
import word from './getWord.js'

function App() {
  const [gess, setGess] = useState<string>("")
  const [gesses, setGesses] = useState<string[]>([])
  const [validatedGesses, setValidatedGesses] = useState<[][]>([])
  let correctWord = '' 

  const newState = () => {
    setGess('')
    setGesses(gesses.concat(['']))
  }

  useEffect(() => {
    correctWord = word()
    correctWord = 'idoso'
  }, [])

  const validateGess = () => {
    for (let i = 0; i < word.length; i++) {
      const findedIndex = correctWord.search(gess[i])
      if (findedIndex == -1)  return
      else if (findedIndex == i) {
        return
      } 
      else return
    }
  }
  
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const eventTarget = event.target as HTMLElement
    const text = eventTarget.innerText
    let finalGess = ""
    if (text == 'Ok') {
      if(gess.length == 5) {
        validateGess()
        newState()
        return
      }
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
