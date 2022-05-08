export default function Testimonial({ testimonial }) {
    return (
        <div className="bg-white w-64 lg:w-80 px-8 mb-10 lg:mb-0 rounded-lg">
            <div className="w-8 h-8 pt-8">
                <img src="/left-quote.svg" alt="blue opening speech mark" width={'100%'} height={'100%'} />
            </div>
            <p className="mt-16">{testimonial.description}</p>
            <div className="flex justify-between items-center my-8 w-44">
                <div className="w-16 lg:w-20 h-16 lg:h-20 rounded-full">
                    <img src={testimonial.image.asset.url} alt="" className="rounded-full border-2 border-brand-red"/>
                </div>
                <div>
                    <p className="font-bold text-lg">{testimonial.name}</p>
                    <p className="text-gray-500">{testimonial.title}</p>
                    <p className="text-gray-500">{testimonial.company}</p>
                </div>
            </div>
        </div>
    )
}