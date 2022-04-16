import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.scss'

import CartWidget from './CartWidget'


const Navbar = () => {
    return (

        <header className='navbar'>

            <div className='nav-left'>

                <Link to="/acerca-de">
                    Acerca de
                </Link>

                <div className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Productos
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><Link to="/productos">Ver Todo</Link></li>
                        <li><Link to="/productos/comics">Comics</Link></li>
                        <li><Link to="/productos/mangas">Mangas</Link></li>
                    </ul>
                </div>

            </div>

            <div>
                <Link to="/">
                    <div className='logo'>
                        <img src="../../assets/img/thrashed-logo.png" alt="Thrashed Logo" />
                        <div className=' logo-text'>
                            <h1>THRASHED<span>comics</span></h1>
                        </div>
                    </div>
                </Link>
            </div>


            <div className='nav-right'>
                <Link style={{marginRight:'2.5rem'}} to="/user">Usuario</Link>
                <Link to="/cart"><CartWidget /></Link>
            </div>

        </header>

    )
}

export default Navbar