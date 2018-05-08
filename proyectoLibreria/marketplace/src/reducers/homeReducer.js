const initialState = {
  allProducts: [],
  currentPage: 1,
  filter: "",
  filteredProducts: [],
  itemsPerPage: 6,
  selectedProduct: null
}

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case "RECEIVE_PRODUCTS":
      return {
        ...state,
        allProducts: action.products,
        filteredProducts: action.products
      }
    case "FILTER_PRODUCTS":
      return {
        ...state,
        filteredProducts: !action.filter
          ? state.allProducts
          : state.allProducts.filter(product => {
              return product.titulo.toLowerCase().includes(action.filter.toLowerCase())
            })
      }
    case "SAVE_PRODUCTS_OK":
      return {
        ...state,
        allProducts: state.allProducts.concat(action.product),
        filteredProducts: state.filteredProducts.concat(action.product)
      }
    case "DELETE_PRODUCTS_OK":
      return {
        ...state,
        allProducts: state.allProducts.filter(product => product.id !== action.product.id),
        filteredProducts: state.filteredProducts.filter(
          product => product.id !== action.product.id
        ),
        selectedProduct: []
      }
    case "SELECT_PRODUCT":
      return {
        ...state,
        selectedProduct: action.product
      }
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.currentPage
      }
    case "SET_FILTER":
      return {
        ...state,
        filter: action.filter
      }
    case "INITIAL_VALUES_FORM":
      console.log("INITIAL_VALUES_FORM")
      return {
        ...state,
        initialValues: action.product
      }

    default:
      return state
  }
}
