import './App.css'
import Gess from './components/Gess'
import Keyboard from './components/Keyboard'

function App() {
  return (
      <div className="page">
        <div className="container">
            <h1>Termo React</h1>
            <Gess />
            <Keyboard />
        </div>
      </div>
  )
}

export default App
