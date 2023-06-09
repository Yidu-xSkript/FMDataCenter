import dots from '../assets/dots.png';

const ServiceCard = ({ right, alt_text, title, text, image, imageWidth, upperPadding }) => {
    return <div className="flex items-center px-32">
        {!right && <div className="">
            {/* image */}
            <img className="rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 duration-500 bg-primary-b px-10" style={{ width: imageWidth, paddingTop: upperPadding, paddingBottom: upperPadding }} src={image} alt={title} />
        </div>}
        <div className="space-y-5 mx-10 w-3/4">
            <h5 className='text-primary-a uppercase tracking-widest text-sm font-bold'>{ alt_text }</h5>
            <h2 className='capitalize text-4xl font-bold'>{ title }</h2>
            <p>{ text }</p>
        </div>
        {right && <div className="relative">
            <img className="relative rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 duration-500 bg-primary-b px-10 z-20" style={{ width: imageWidth, paddingTop: upperPadding, paddingBottom: upperPadding }} src={image} alt={title} />
            <img className="-top-7 -left-7 absolute z-0 w-24" src={dots} alt="dots" />
        </div>}
    </div>
}

export default ServiceCard;