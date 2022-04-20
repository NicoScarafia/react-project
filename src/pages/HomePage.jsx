import React, {useState, useEffect} from 'react'
// Componentes
import Slider from '../components/Slider'
import HomeNovedades from '../components/HomeNovedades'
import VerTodo from '../components/VerTodo'
import Newsletter from '../components/Newsletter'
// Data
import { mobileSlides, webSlides } from '../data/slides'

const HomePage = () => {

    const [isDesktop, setIsDesktop] = useState(true)

    const checkIsDesktop = () => {
        if (window.visualViewport.width <= 540) {
            setIsDesktop(false)
        } else {
            setIsDesktop(true)
        }
    }

    useEffect(() => {
        checkIsDesktop()
        window.addEventListener('resize', checkIsDesktop)
        return () => window.removeEventListener('resize', checkIsDesktop)
    }, [])

    return (
        <div>
            {
                isDesktop 
                ? <Slider slides={webSlides} />
                : <Slider slides={mobileSlides} />
            }

            <HomeNovedades />
            <VerTodo />
            <Newsletter />
        </div>
    )
}

export default HomePage