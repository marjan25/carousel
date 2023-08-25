import React, { useState, useEffect } from 'react'
import './Carosall.scss'
import img1 from "../images/img1.png"
import img3 from "../images/img3.png"
import img4 from "../images/img4.png"
import img5 from "../images/img5.png"
import right from "../images/right-arrow.png"
import left from "../images/left-arrow.png"

const CarosalData = [
    {name:"Visitas",
        image: img1
    },
    {
        name:"Roboduct",
        image: img3
    },
    {name:"SafeHealth",
        image: img4
    },
    {
        name:"Activos",
        image: img5
    },

]

const Caroseal = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((activeIndex + 1) % CarosalData.length);
    };

    const prevSlide = () => {
        setActiveIndex(activeIndex === 0 ? CarosalData.length - 1 : activeIndex - 1);
    };

    const prevIndex = (activeIndex === 0 ? CarosalData.length - 1 : activeIndex - 1) % CarosalData.length;
    const nextIndex = (activeIndex + 1) % CarosalData.length;


    useEffect(() => {
        const nextSlideIntervalId = setInterval(() => {
            nextSlide();
        }, 3000);


        return () => clearInterval(nextSlideIntervalId);
    }, [activeIndex]);


    return (
        <div className='carosalComp'>
            <div className='carosalText1'><p >Our Expertise</p></div>
            <div className='carosalText2'><p>{CarosalData[activeIndex]?.name}</p></div>
            <div className='carosal'>
                <div className='caroasalImg1'>
                    <div className='caroasalImg1-1'>
                        <button className="left-arrow" onClick={prevSlide}><img src={left} alt='imagee' /></button>
                        <p>Left</p>
                    </div>
                    <img src={CarosalData[prevIndex]?.image} alt="imgg" />
                </div>
                <div className='caroasalImg2'>
                    <img src={CarosalData[activeIndex]?.image} alt='ecommerce' className='image' />
                </div>
                <div className='caroasalImg3'>
                    <img src={CarosalData[nextIndex]?.image} alt="imgg" />
                    <div className='caroasalImg1-1'>
                        <p>Right</p>
                        <button className="right-arrow" onClick={nextSlide}><img src={right} alt='imagee' /> </button>
                    </div>
                </div>
            </div>
            <div className='carosalContent'><p>User-Friendly tool that streamlines every single asset you own,bringing discipline  form start</p>

            </div>
            <div className="pagination-dots">
                {CarosalData.map((_, index) => (
                    <span
                        key={index}
                        className={index === activeIndex ? 'dot active ' : 'dot'}
                        onClick={() => setActiveIndex(index)}
                    ></span>
                ))}
            </div>

        </div>
    )
}

export default Caroseal