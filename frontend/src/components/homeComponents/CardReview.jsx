const reviews = [
    {
        id: 1,
        name: "Colton Smith",
        veridedBuyer: "Verified Buyer",
        description: " We needed the same printed design as the one we had ordered a week prior.  Not only did they find the original order, but we also received it in time.Excellent!",
        image: "image-colton.jpg",
    },
    {
        id: 2,
        name: "Irene Roberts ",
        veridedBuyer: "Verified Buyer",
        description: "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.",
        image: "image-irene.jpg",
    },
    {
        id: 3,
        name: "Anne Wallaces ",
        veridedBuyer: "Verified Buyer",
        description: "Put an order with this company and can only praise them for the very high standard.Will definitely use them again and recommend them to everyone!",
        image: "image-anne.jpg",
    }
]

const classPosition = [
    "lg:mt-0",
    "lg:mt-8",
    "lg:mt-16"
]


function CardReview() {
    return (
        <div className="flex flex-col justify-center items-center lg:flex-row lg:gap-4 ">
            {reviews.map((review, index) => (
                <div key={review.id}
                    className={`flex flex-col gap-4 bg-Dark-Grayish-Magenta py-8
                    text-Light-Grayish-Magenta rounded mt-4 ${classPosition[index]}`}>

                    <div className="flex justify-start items-ceter gap-4 px-8">
                        <img src={`/src/assets/images/${review.image}`}
                            className="w-12 rounded-full"
                            alt={review.name} />

                        <div className="flex flex-col justify-center items-center ">
                            <h1 className="text-sm/3 font-bold">{review.name}</h1>
                            <p className="text-sm text-Soft-Pink font-lightld">{review.veridedBuyer}</p>
                        </div>
                    </div>
                    <p className="text-[16px]/5 px-12 lg:px-6" >" {review.description} "</p>
                </div>
            ))

            }
        </div>
    )
}

export default CardReview