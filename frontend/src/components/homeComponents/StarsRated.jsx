import StartImg from '../../assets/images/icon-star.svg'
import Star from './Star'

function StarsRated() {
  return (
    <div className="flex flex-row justify-center items-center gap-1">
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  )
}

export default StarsRated