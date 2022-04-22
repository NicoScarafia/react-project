import React from 'react'

const SmallMsg = ( {texto='Error', icono = 'bi bi-x-lg', color = 'indianred'} ) => {
  return (
    <small style={{color: color}}><i className={icono}></i> {texto}</small>
  )
}

export default SmallMsg