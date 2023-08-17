import './GessWord.css'

interface GessWordProps {
  letter: string,
}
function GessWord({ letter }: GessWordProps) {
  return (
      <div className="word-container">
        <div className='letter'>{letter}</div>
        <div className='letter'>{letter}</div>
        <div className='letter'>{letter}</div>
        <div className='letter'>{letter}</div>
        <div className='letter'>{letter}</div>
      </div>
  )
}

export default GessWord