import React, { useState } from 'react'

const Contador = () => {

    const [contador, setContador] = useState(0)

    const aumentar = () => {
        setContador(contador + 1)
    }

    return (
        <div className='mt-4'>
            <hr />
            <h2 className='mt-4'>Contador: {contador}</h2>

            <button className='btn btn-warning mt-2' onClick={aumentar}>
                + 1
            </button>
        </div>
    )
}

export default Contador