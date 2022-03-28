import React from 'react'

const CartWidget = () => {
  return (
    <div style={{paddingLeft: "1rem"}}>

      <button type="button" className="btn btn-danger rounded-pill position-relative">
        <i className="bi bi-cart-fill"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
          0
        </span>
      </button>

    </div>
  )
}

export default CartWidget