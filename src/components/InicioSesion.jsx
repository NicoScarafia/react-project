import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const InicioSesion = () => {

    const { loading,
        handleSubmit,
        campoVacio,
        weekPassword,
        mailInUse,
        handleSignUp,
        emailnotFound,
        wrongPassword,
        handleLogIn,
        emailRef,
        passwordRef
    } = useContext(AuthContext)

    return (

        <div className='d-flex'>

                <div className='mx-auto'>

                    <form onSubmit={handleSubmit} style={{ maxWidth: '40rem', minHeight:'12rem' }} className='form-control d-flex flex-column justify-content-around'>

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
    )
}

export default InicioSesion