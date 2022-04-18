import React, { useContext } from 'react'
// Context
import { AuthContext } from '../context/AuthContext'
// Componentes
import InicioSesion from '../components/InicioSesion'
import BotonesHomeNavigation from '../components/BotonesHomeNavigation'
// Estilos
import '../styles/UserForm.scss'
import PedidosRealizados from '../components/PedidosRealizados'


const UserPage = () => {

    const {
        currentUser,
        handleLogOut,
    } = useContext(AuthContext)


    
    if (currentUser) {
        return (
            <div className='session mx-auto text-center text-black container'>
                <h4 className='mt-5'>INICIASTE SESIÓN CON LA CUENTA</h4>

                <div className='account card' style={{maxWidth: '380px'}}>
                    <img style={{ maxWidth: '6rem' }} src="../../assets/img/decorativas/user-account.png" alt="Imagen de perfil genérica" />
                    <p>{currentUser.email}</p>
                </div>

                <button
                    onClick={handleLogOut}
                    className='btn btn-sm btn-danger mb-3'>
                    Cerrar Sesión
                </button>

                <div className='mt-5'>
                    <h4>PEDIDOS REALIZADOS</h4>
                    <PedidosRealizados />
                </div>

                <BotonesHomeNavigation />
            </div>
        )
    }

    return (
        <div className='user-form mx-auto text-center container'>
            <h2 className='my-5'>REGISTRO / INICIO DE SESIÓN</h2>
            <InicioSesion />
            <BotonesHomeNavigation />
        </div>
    )
}

export default UserPage