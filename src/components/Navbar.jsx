import React from 'react'
import CartWidget from './CartWidget'
import OnlineStatus from './OnlineStatus'

const Navbar = () => {
    return (

        <header className='header'>

            <div className='brand'>
                <img className='logo' src="assets/img/logo.png" alt="Logo OMG Comics" />
                <a href="#">OMG! Comics</a>
            </div>

            <nav>
                <ul>
                    <li><a href="#novedades">Novedades</a></li>
                    <li><a href="#">Comics</a></li>
                    <li><a href="#">Mangas</a></li>
                    <li><a href="#">Figuras</a></li>
                    <li><CartWidget /></li>
                    <li><OnlineStatus /></li>
                </ul>
            </nav>

        </header>

    )
}

export default Navbar