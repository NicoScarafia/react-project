import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import InicioSesion from '../components/InicioSesion'
// Estilos
import '../styles/UserForm.scss'
import BotonesHomeNavigation from '../components/BotonesHomeNavigation'


const UserPage = () => {

    const {
        currentUser,
        handleLogOut,
    } = useContext(AuthContext)


   if (currentUser) {
        return (
            <div className='session mx-auto text-center text-black'>
                <h4 className='mt-5'>INICIASTE SESIÓN CON LA CUENTA</h4>

                <div className='account card'>
                    <img style={{ maxWidth: '6rem' }} src="../../assets/img/decorativas/user-account.png" alt="" />
                    <p>{currentUser.email}</p>
                </div>

                <button
                    onClick={handleLogOut}
                    className='btn btn-sm btn-danger'>
                    Cerrar Sesión
                </button>
                
                <BotonesHomeNavigation />
            </div>
        )
    }
    
    return (
        <div className='user-form mx-auto text-center'>
            <h2 className='my-5'>REGISTRO / INICIO DE SESIÓN</h2>
            <InicioSesion />   
            <BotonesHomeNavigation />
        </div>
    )
}

export default UserPage