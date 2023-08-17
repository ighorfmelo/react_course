import GessWord from "./GessWord"
interface GessWordProps {
  gesses: string[],
}
function Gess({ gesses }: GessWordProps) {
  const finalGesses = ['', '', '', '', '']
  if (gesses.length > 0) {
    for (let i = 0; i < gesses.length; i++) {
      finalGesses[i] = gesses[i];
    }
  }
  
  return (
      <div>
        <GessWord gess={finalGesses[0]} />
        <GessWord gess={finalGesses[1]} />
        <GessWord gess={finalGesses[2]} />
        <GessWord gess={finalGesses[3]} />
        <GessWord gess={finalGesses[4]} />
      </div>
  )
}

export default Gess