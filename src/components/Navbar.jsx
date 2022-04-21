import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import '../styles/Navbar.scss'



const Navbar = () => {
    return (

        <header className='sticky navbar d-flex justify-content-around align-items-center'>

            <div className='nav-left'>

                <div className="nav-item dropdown">
                    <button className="nav-link dropdown-toggle nav-button" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Productos
                    </button>
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
                <Link style={{ marginRight: '2.5rem' }} to="/user">Usuario</Link>
                <Link to="/cart"><CartWidget /></Link>
            </div>

        </header>

    )
}

export default Navbar