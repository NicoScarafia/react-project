import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
// Estilos
import '../styles/UserForm.scss'


const LogInRegister = () => {

    const { loading,
        currentUser,
        handleSubmit,
        campoVacio,
        weekPassword,
        mailInUse,
        handleSignUp,
        emailnotFound,
        wrongPassword,
        handleLogIn,
        handleLogOut,
        emailRef,
        passwordRef
    } = useContext(AuthContext)


   if (currentUser) {
        return (
            <div className='session mx-auto text-center text-black'>
                <h4>INICIASTE SESIÓN CON LA CUENTA</h4>

                <div className='account card'>
                    <img style={{ maxWidth: '6rem' }} src="../../assets/img/decorativas/user-account.png" alt="" />
                    <p>{currentUser.email}</p>
                </div>

                <button
                    onClick={handleLogOut}
                    className='btn btn-sm btn-danger'>
                    Cerrar Sesión
                </button>
            </div>
        )
    }
    
    return (
        <div className='user-form mx-auto text-center'>

            <h2 className='mt-5'>REGISTRO / INICIO DE SESIÓN</h2>

            <div className='d-flex'>

                <div className='mx-auto my-3'>

                    <form onSubmit={handleSubmit} style={{ maxWidth: '40rem' }} className='form-control'>

                        <input
                            ref={emailRef}
                            className='form-control'
                            type="email"
                            placeholder='E-mail'
                        />
                        {campoVacio && <small><i className="bi bi-x-lg"></i> Campo obligatorio</small>}
                        {mailInUse && <small><i className="bi bi-x-lg"></i> El email ya está en uso</small>}
                        {emailnotFound && <small><i className="bi bi-x-lg"></i> El email no pertenece a un usuario registrado</small>}

                        <input
                            ref={passwordRef}
                            className='form-control'
                            type="password"
                            placeholder='Contraseña'
                        />
                        {campoVacio && <small><i className="bi bi-x-lg"></i> Campo obligatorio</small>}
                        {weekPassword && <small><i className="bi bi-x-lg"></i> La contraseña debe tener un mínimo de 6 caracteres</small>}
                        {wrongPassword && <small><i className="bi bi-x-lg"></i> La contraseña es incorrecta</small>}

                        <div className='my-2'>

                            <button
                                onClick={handleLogIn}
                                disabled={loading}
                                className='btn btn-success btn-sm mx-2'
                            >Iniciar sesión
                            </button>

                            <button
                                onClick={handleSignUp}
                                disabled={loading}
                                className='btn btn-primary btn-sm mx-2'
                            >Crear usuario
                            </button>

                        </div>

                    </form>

                </div>
            </div>

        </div>
    )
}

export default LogInRegister