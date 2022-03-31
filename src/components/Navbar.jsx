import React from 'react'
import { Link } from 'react-router-dom'

import CartWidget from './CartWidget'

const Navbar = () => {
    return (

        <header className='header'>

            <nav className='first-nav'>
                <ul>
                    <li> <Link to="/locales">Locales</Link> </li>
                    <li> <Link to="/acerca-de">Acerca de nosotros</Link> </li>
                </ul>
            </nav>

            <div className='brand'>
                <Link to="/"><img className='logo' src="../assets/img/logo.png" alt="Logo OMG Comics" /></Link>
            </div>

            <nav className='d-flex'>
                <ul>
                    <li> <Link to="/categoria/comics">Comics</Link> </li>
                    <li> <Link to="/categoria/mangas">Mangas</Link> </li>
                </ul>
                    <Link to="/cart"><CartWidget /></Link>
            </nav>

        </header>

    )
}

export default Navbar