import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import NavbarMobile from './NavbarMobile'

const Header = () => {

    const [isDesktop, setIsDesktop] = useState(true)

    const checkIsDesktop = () => {
        if (window.visualViewport.width <= 700) {
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
        isDesktop
            ? <Navbar />
            : <NavbarMobile />
    )
}

export default Header