import React from 'react'

const Cargando = () => {

    return (

        <div
            style={{ width: '70%', minHeight: '25rem' }}
            className="d-flex justify-content-center text-white align-items-center container">

            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            
        </div>
    )

}

export default Cargando