import { checkProductExistence } from "../../actions/cartActions"
import { connect } from "react-redux"
import React from "react"
import { deleteProducts } from "../../actions/homeActions"
import { NavLink } from "react-router-dom"

const mapStateToProps = state => ({
  allProducts: state.home.allProducts,
  selectedProduct: state.home.selectedProduct
})

const mapDispatchToProps = dispatch => ({
  checkProductExistence: product => dispatch(checkProductExistence(product)),
  deleteProducts: product => dispatch(deleteProducts(product))
})

function Product(props) {
  const product =
    props.selectedProduct || props.allProducts.find(i => i.id === +props.match.params.productId)
  const { resumen, imageUrl, titulo, autor, stock, precio, editorial } = product

  return (
    <div className="card h-100">
      <img className="card-img-top" src={imageUrl} alt={titulo} />
      <div className="card-body">
        <h4 className="card-title">{titulo}</h4>
        <h6 className="card-subtitle mb-2 text-muted">{autor}</h6>
        <p className="card-text">{resumen}</p>
        <p className="card-text text-info">AR$ {precio}</p>
        <p className="card-text">
          <small>Editorial {editorial}</small>
        </p>
        <p className="card-text">
          <small className="text-muted">Stock: {stock}</small>
        </p>
        <p className="text-center">
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => props.checkProductExistence(product)}
          >
            Comprar <i className="fa fa-shopping-cart" />
          </button>
        </p>

        <NavLink
          exact
          className="card-link"
          to="/admin"
          activeClassName="active"
          // onClick={() => props.checkProductExistence(product)}
        >
          Editar
        </NavLink>

        <NavLink
          exact
          className="card-link text-danger"
          to="/home"
          activeClassName="active"
          onClick={() => props.deleteProducts(product)}
        >
          Eliminar
        </NavLink>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
