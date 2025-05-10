import StarsRated from "./StarsRated"



function CardRated({text}) {
  return (
    <div className="flex flex-col justify-center items-center gap-2 font-semibold text-Dark-Grayish-Magenta text-base w-full p-2
   lg:flex-row lg:gap-4 ">
        <StarsRated />
         {text}
    </div>
  )
}

export default CardRated