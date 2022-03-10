import React from 'react'

const Navbar = () => {
    return (
        <div className="mb-4">

            <nav className="navbar navbar-expand-lg navbar-light bg-warning px-5">

                <div className="container-fluid">

                    <div>
                        <a className="navbar-brand" href="#">
                            <img src="assets/img/logo.png" alt="logo" width="30" height="30" className="d-inline-block align-text-top" />
                            OMG Comics!
                        </a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Comics</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Mangas</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Merchandising
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li>
                                        <a className="dropdown-item" href="#">Ropa</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Figuras</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="bi bi-cart-fill"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default Navbar