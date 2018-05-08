import { checkProductExistence } from "../../actions/cartActions"
import { connect } from "react-redux"
import { filterProducts, selectProduct, setCurrentPage, setFilter } from "../../actions/homeActions"
import ProductFilter from "./ProductFilter"
import ProductList from "./ProductList"
import ProductPagination from "./ProductPagination"
import React from "react"

const mapStateToProps = state => ({
  currentPage: state.home.currentPage,
  filter: state.home.filter,
  filteredProducts: state.home.filteredProducts,
  itemsPerPage: state.home.itemsPerPage,
  selectedProduct: state.home.selectedProduct
})

const mapDispatchToProps = dispatch => ({
  checkProductExistence: product => dispatch(checkProductExistence(product)),
  filterProducts: filter => dispatch(filterProducts(filter)),
  selectProduct: product => dispatch(selectProduct(product)),
  setCurrentPage: currentPage => dispatch(setCurrentPage(currentPage)),
  setFilter: filter => dispatch(setFilter(filter))
})

function Home(props) {
  const { currentPage, filteredProducts, itemsPerPage } = props
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div>
      <ProductFilter {...props} />
      <ProductList products={paginatedProducts} {...props} />
      <ProductPagination {...props} />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
