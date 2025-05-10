import CardRelated from "../components/homeComponents/CardRated";
import CardReview from "../components/homeComponents/CardReview";
import HomeHeader from "../components/homeComponents/HomeHeader";
import RelatedSection from "../components/homeComponents/RatedSection";




function Home() {
    return (
        <div className="font-league">
            <div className="flex flex-col xl:flex-row justify-center items-center gap-4
                lg:justify-between lg:gap-0 lg:max-w-5xl lg:mx-auto lg:px-4">
                <HomeHeader />
                <RelatedSection />
            </div>
            <div
                className="flex flex-col justify-center items-center gap-4 lg:justify-between 
                mb-24 lg:gap-0 lg:max-w-5xl lg:mx-auto lg:px-4">
                <CardReview />
            </div>
        </div>
    )
}

export default Home 