import { checkProductStock, incrementProduct, removeProduct } from "../../actions/cartActions"
import { connect } from "react-redux"
import ItemList from "./ItemList"
import React from "react"

const mapStateToProps = state => ({
  items: state.cart
})

const mapDispatchToProps = dispatch => ({
  checkProductStock: id => dispatch(checkProductStock(id)),
  incrementProduct: id => dispatch(incrementProduct(id)),
  removeProduct: id => dispatch(removeProduct(id))
})

function Cart(props) {
  const total = props.items.reduce((acc, cur) => acc + cur.precio * cur.quantity, 0)

  return (
    <section>
      <h1>Cart</h1>
      <div className="row">
        <ItemList items={props.items} {...props} />
      </div>
      <p className="text-right">
        Total: <strong>{total}</strong>
      </p>
    </section>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
