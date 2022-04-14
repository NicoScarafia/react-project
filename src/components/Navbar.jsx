import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.scss'

import CartWidget from './CartWidget'


const Navbar = () => {
    return (

        <header className='navbar'>

            <div className='logo-img'>
                <Link to="/">
                    <img src="../../assets/img/thrashed-logo.png" alt="Thrashed Logo" />
                </Link>
            </div>

            <div>
                <Link to="/"> <div className='logo'>
                    <h1>THRASHED<span>comics</span></h1></div>
                </Link>
            </div>


            <div className='nav-list'>
                {/* <Link to="/productos/comics">Comics</Link>
                <Link to="/productos/mangas">Mangas</Link> */}
                <div style={{ width: '10rem', color: 'black' }}>
                    <div style={{maxWidth: '5rem'}} className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Productos
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><Link to="/productos">Ver Todo</Link></li>
                            <li><Link to="/productos/comics">Comics</Link></li>
                            <li><Link to="/productos/mangas">Mangas</Link></li>
                        </ul>
                    </div>
                </div>
                <Link to="/cart"><CartWidget /></Link>
            </div>

        </header>

    )
}

export default Navbar