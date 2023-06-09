const CarouselItem = ({ children, width, activeIndex }) => {
    return <div className={`'relative inline-flex items-center justify-center' ${activeIndex ? 'scale-110 duration-700' : ''}`} style={{width: width}}>
        {children}
    </div>
}

export default CarouselItem;