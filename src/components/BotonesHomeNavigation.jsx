import React from 'react'
// RouterDom
import {  useNavigate, Link } from 'react-router-dom'

const BotonesHomeNavigation = () => {
  
  const navigate = useNavigate()
  const handleNavigate = () => { navigate(-1) }

  return (
    <div className='d-flex justify-content-center'>
        <button onClick={handleNavigate} className='mt-5 mx-2 btn btn-sm btn-primary'>
          <i className="bi bi-arrow-bar-left"></i> Volver
        </button>
        <Link to="/" ><button className='mt-5 mx-2 btn btn-sm btn-primary'>
          <i className="bi bi-house-door"></i> Ir a la Home
        </button></Link>
    </div>
  )
}

export default BotonesHomeNavigation