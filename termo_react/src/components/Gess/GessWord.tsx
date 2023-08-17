import './GessWord.css'

interface GessWordProps {
  gess: string,
}
function GessWord({ gess }: GessWordProps) {
  return (
      <div className="word-container">
        <div className='letter'>{gess[0]}</div>
        <div className='letter'>{gess[1]}</div>
        <div className='letter'>{gess[2]}</div>
        <div className='letter'>{gess[3]}</div>
        <div className='letter'>{gess[4]}</div>
      </div>
  )
}

export default GessWord