import topBg from "../../assets/images/top-desktop.svg"
import topBgMobile from "../../assets/images/top-mobile.svg"



function HomeHeader() {
  return (
        <div className="flex flex-col justify-center items-center gap-4
    text-Dark-Grayish-Magenta text-center py-8 px-4
    lg:items-start lg:text-left lg:gap-4 lg:py-16 lg:px-0 lg:w-1/2
     ">
     <img src={topBg} alt="" className="absolute w-4/6 top-0 left-0 hidden lg:block object-cover object-center" />
     <img src={topBgMobile} alt="" className="absolute w-full top-0 left-0  object-cover object-center lg:hidden" />
            <h1 className="text-4xl/7 font-bold lg:max-w-1/2">
                10,000+ of our users love our products.</h1>
            <p className="text-[15px]/5 lg:max-w-5/7">
                We only provide great products combined with excellent customer service.
                See what our satisfied customers are saying about our services.
            </p>
        </div>
    )
}

export default HomeHeader