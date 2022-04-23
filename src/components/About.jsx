import React from 'react'
import '../styles/About.scss'

const About = () => {
    return (

        <div className='container about'>

            <h2 className='mt-5'>ACERCA DE</h2>

            <p className='main-text'>
                <img className='logo' src="../../assets/img/iconos/thrashed-logo-blanco.png" alt="Thrashed Logo" /> es un e-commerce ficticio, desarrollado por <span>Nicolás Scarafia</span>, como proyecto final para el curso de <span>ReactJS</span> de Coderhouse.
            </p>

            <div className='images-container'>
                <img src="../../assets/img/iconos/react.png" alt="Logo React" />
                <img src="../../assets/img/iconos/firebase.png" alt="Logo Firebase" />
                <img src="../../assets/img/iconos/sass.png" alt="Logo Sass" />
                <img src="../../assets/img/iconos/bootstrap.png" alt="Logo Bootstrap" />
            </div>

            <div className='description'>
                <p>Para realizar el sitio:</p>

                <ol>
                    <li>Hice uso de los <span>Hooks propios de React</span> ( useState(), useEffect, useRef(), etc. ).</li>
                    <li>Prioricé la <span>reutilización de componentes</span>. De esta manera, las listas de novedades utilizan el mismo componente, lo mismo sucede con los slider o con las tarjetas de productos, entre otros. Sólo cambia la información que se le pasa por props. </li>
                    <li>Implementé <span>React Router DOM</span> para la navegación, evitando la recarga innecesaria del sitio web.</li>
                    <li>Creé <span>Contextos</span> tanto para el carrito de compras como para la autenticación de usuarios.</li>
                    <li>Empleé <span>Firebase</span> como base de datos de los productos y de los usuarios.</li>
                    <li>Creé un useCollection() como <span>Custom Hook</span> que me permitió obtener la información de Firebase para los distintos componentes sólo pasando como referencia la búsqueda que necesitaba. Así, con el mismo Hook se obtiene la data que lista todos los productos, sólo los de alguna categría, las novedades o las órdenes realizadas por los usuarios registrados.</li>
                    <li>Implementé la <span>modificación de la base de datos en tiempo real</span> a partir de las compras de los usuarios. De esta manera, su compra disminuirá el stock de los productos en Firebase.</li>
                    <li>Creé <span>formularios</span>, con sus respectivas validaciones</li>
                    <li>Me valí del <span>renderizado condicional</span>. Así, dependiendo de un estado determinado se muestran algunos componentes u otros. Por ejemplo: la página de Usuario, en el caso de que no haya un usuario loggeado, mostrará el registro/inicio de sesión y, en cambio, de haber usuario loggeado, mostrará los pedidos que éste realizó. También lo utilicé para renderizar componentes dependiendo del ancho del viewport; por ejemplo, en la versión mobile los componentes Navbar y Slider son distintos a los mostrados en desktop.</li>
                    <li>En cuanto a los estilos, están realizados con <span>Boostrap 5 y SASS</span> y es complemente responsive.</li>
                </ol>
            </div>

            <div className='mb-4'>
                <p className='main-text'>Para más información:</p>

                <a className='btn btn-dark mx-2' target='_blank' rel="noreferrer" href="https://github.com/NicoScarafia/react-project">
                    <i className="bi bi-github"></i> Ver Código
                </a>

                <a className='btn btn-primary mx-2' target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/nicolas-scarafia/">
                    <i className="bi bi-linkedin"></i> LinkedIn
                </a>
            </div>

        </div>

    )
}

export default About