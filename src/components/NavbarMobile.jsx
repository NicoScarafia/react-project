import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import '../styles/Navbar.scss'



const NavbarMobile = () => {
    const small = true

    return (

        <header className='mobile-header'>
            <div className='navbar d-flex justify-content-around align-items-center px-3'>

                <div>
                    <Link to="/user"><button type="button" className="btn btn-sm btn-light rounded-pill position-relative">
                        <i class="bi bi-person-fill"></i>
                    </button></Link>
                </div>

                <div>
                    <Link to="/">
                        <div className='logo' >
                            <img src="../../assets/img/thrashed-logo.png" alt="Thrashed Logo" />
                            <div className=' logo-text'>
                                <h1>THRASHED<span>comics</span></h1>
                            </div>
                        </div>
                    </Link>
                </div>


                <div className='nav-right'>
                    <Link to="/cart">
                        <CartWidget small={small} />
                    </Link>
                </div>

            </div>


            <div className='second-navbar'>
                <Link to="/productos">Ver Todo</Link>
                <Link to="/productos/comics">Comics</Link>
                <Link to="/productos/mangas">Mangas</Link>
            </div>
        </header>

    )
}

export default NavbarMobile