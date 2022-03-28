import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {

  return (

    <div className='d-flex  flex-column align-items-center justify-content-center'>

      {/* <img className='w-50' src="https://dinahosting.com/blog/cont/uploads/2021/03/error-404.jpg" alt="Error 404" /> */}
      {/* <img className='img-404' src="https://www.initcoms.com/wp-content/uploads/2020/07/404-error-not-found-1.png" alt="Error 404" /> */}

      <img className='img-404' src="https://www.apartsoltigua.com.ar/includes/404.png" alt="Error 404" />

      <h1 className='not-found-title'>Página no encontrada</h1>

      <div className='d-flex justify-content-center'>
        <Link to="/"><button className='mt-4 btn btn-primary'>Ir a Home</button></Link>
      </div>


    </div>

  )
}

export default Error404