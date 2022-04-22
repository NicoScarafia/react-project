import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import SmallMsg from './SmallMsg'

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

                    <form 
                        onSubmit={handleSubmit} 
                        style={{ maxWidth: '18rem', minHeight:'12rem' }} 
                        className='form-control d-flex flex-column justify-content-around'>

                        <input
                            ref={emailRef}
                            className='form-control'
                            type="email"
                            placeholder='E-mail'
                        />
                        {campoVacio && <SmallMsg texto='Campo obligatorio' />}
                        {mailInUse && <SmallMsg texto='El email ya está en uso' />}
                        {emailnotFound && <SmallMsg texto= 'El email no pertenece a un usuario registrado' />}

                        <input
                            ref={passwordRef}
                            className='form-control'
                            type="password"
                            placeholder='Contraseña'
                        />
                        {campoVacio && <SmallMsg texto='Campo obligatorio' />}
                        {weekPassword && <SmallMsg texto='La contraseña debe tener un mínimo de 6 caracteres' />}
                        {wrongPassword && <SmallMsg texto='La contraseña es incorrecta' />}

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