import React from "react"
import FormProduct from "../product/FormProduct"
import { saveProducts } from "../../actions/homeActions"
import { connect } from "react-redux"

// const mapStateToProps = state => ({
// form: state.form.formProduct.title
// filter: state.home.filter,
// filteredProducts: state.home.filteredProducts,
// itemsPerPage: state.home.itemsPerPage
// })

const mapStateToProps = state => ({
  selectedProduct: state.home.selectedProduct
})

const mapDispatchToProps = dispatch => ({
  saveProducts: product => dispatch(saveProducts(product))
})

//Devuelve el producto del form luego del submit ya persistido en state
const handleProductForm = product => {
  console.log("- handleProductForm - producto", product)
  saveProducts(product)
}

function ProductAdmin(props) {
  return (
    <div className="row">
      <FormProduct onSubmit={handleProductForm} {...props} />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductAdmin)
