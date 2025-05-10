import StarsRated from "./StarsRated"

const rated = [
    " Rated 5 Stars in Reviews",
    "Rated 5 Stars in Report Guru",
    "Rated 5 Stars in BestTech"
   ]
const classPosition = [
    "lg:justify-start",
    "lg:justify-center",
    "lg:justify-end"
]

function RelatedSection() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 my-4 w-full
     lg:justify-center lg:items-center lg:gap-2 lg:w-1/3">
        {
            rated.map((rate, index) => (

              <div key={rate} className={`flex ${classPosition[index]} w-full`}>
                <div
                className={`flex flex-col md:flex-row justify-center items-center w-full py-4 bg-[#ecebec] rounded-sm
                text-Dark-Grayish-Magenta text-xs font-semibold gap-2
               lg:w-fit lg:gap-4 lg:py-2 px-6 `}>
                <StarsRated />
                  {rate}
                </div>
                </div>
            ))
        }
    </div>
  )
}

export default RelatedSection