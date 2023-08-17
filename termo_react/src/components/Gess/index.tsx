import GessWord from "./GessWord"
interface GessWordProps {
  letter: '',
  gesses: [],
}
function Gess({ letter }: GessWordProps) {
  return (
      <div>
        <GessWord letter={letter} />
        <GessWord letter={letter} />
        <GessWord letter={letter} />
        <GessWord letter={letter} />
        <GessWord letter={letter} />
      </div>
  )
}

export default Gess