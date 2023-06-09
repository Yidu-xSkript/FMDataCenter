import React, { useState } from "react";
import Button from "./button";
import ch_left from "../../assets/ch_left.svg";
import ch_right from "../../assets/ch_right.svg";

const CarouselContainer = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [transformation, setTransformation] = useState(25);

    const updateIndex = (newIndex, increased) => {
        const count = React.Children.count(children);
        if (newIndex < 0) newIndex = 0;
        else if (newIndex >= count) newIndex = count - 1;

        if (increased && newIndex < count && newIndex > 0)
            setTransformation(transformation - 50);
        if (!increased && newIndex < count && newIndex >= 0)
            setTransformation(transformation + 50);

        console.log(newIndex, count);

        setActiveIndex(newIndex);
    }

    return (<div className="relative overflow-hidden h-auto my-16">
        <div className="z-10 relative">
            <Button disabled={activeIndex === 0} classname={`absolute left-0 top-72 ml-20`} src={ch_left} action={() => updateIndex(activeIndex - 1, false)} />
            <Button disabled={activeIndex === React.Children.count(children) - 1} classname={`absolute right-0 top-72 mr-20`} src={ch_right} action={() => updateIndex(activeIndex + 1, true)} />
        </div>
        <div className="whitespace-nowrap duration-300" style={{ transform: `translateX(${transformation}%)` }}>
            {React.Children.map(children, (child, index) => {
                return React.cloneElement(child, {width: '50%', activeIndex: index === activeIndex});
            })}
        </div>
    </div>)
}

export default CarouselContainer;