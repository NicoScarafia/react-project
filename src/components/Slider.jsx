import React, { useEffect, useState } from 'react'
import styledComponents from 'styled-components';
// Estilos
import '../styles/Slider.scss'

const Wrapper = styledComponents.div`
    display: flex;
    transition: all 0.8s ease-out;
    transform: translateX( ${props => props.slideIndex * -100}vw );
`


const Slider = ({slides}) => {

    const [slideIndex, setSlideIndex] = useState(0)

    const HandleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : (slides.length - 1))
        }
        if (direction === 'right') {
            setSlideIndex(slideIndex < (slides.length - 1) ? slideIndex + 1 : 0)
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            slideIndex < slides.length - 1 
                ? setSlideIndex(slideIndex+1) 
                : setSlideIndex(0)
        }, 4000);
        return () => clearInterval(interval);
    }, [slideIndex, slides.length]);


    return (

        <div className='slider-container'>

            <div className='arrows-container'>
                <div className="btn-izq" onClick={() => HandleClick('left')}  >
                    <i className="bi bi-caret-left-fill"></i>
                </div>
                <div className="btn-der" onClick={() => HandleClick('right')}  >
                    <i className="bi bi-caret-right-fill"></i>
                </div>
            </div>

            <Wrapper slideIndex={slideIndex}>
                {slides.map((slide) => (
                    <div key={slide.id} className='slide-container'>
                        <div className='image-container'>
                            <img src={slide.imagen} alt={slide.texto} />
                        </div>
                        <div className='info-container'>
                            <h4 className='slider-title'>{slide.texto}</h4>
                        </div>
                    </div>
                ))}
            </Wrapper>

        </div>

    )
}

export default Slider