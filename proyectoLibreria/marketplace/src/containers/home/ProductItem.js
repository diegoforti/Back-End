import { Link } from "react-router-dom"
import React from "react"

export default function ProducItem(props) {
  // Destructuramos las propiedades necesarias del objeto producto
  const { resumen, id, imageUrl, titulo, precio } = props.product
  const { checkProductExistence, product, selectProduct } = props

  return (
    <div className="col-lg-4 col-sm-6 portfolio-item">
      <div className="card h-100">
        <Link to={`/producto/${id}`} onClick={() => selectProduct(product)}>
          <img className="card-img-top" src={imageUrl} alt={titulo} />
        </Link>
        <div className="card-body">
          <h4 className="card-title">
            <Link to={`/producto/${id}`} onClick={() => selectProduct(product)}>
              {titulo}
            </Link>
          </h4>
          <p className="card-text">{resumen}</p>
          <p className="card-text text-info">AR$ {precio}</p>
          <p className="text-center">
            <button className="btn btn-dark" onClick={() => checkProductExistence(product)}>
              Comprar <i className="fa fa-shopping-cart" />
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
