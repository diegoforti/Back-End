import axios from "axios"
// import { getAllProducts } from '../api/data-service'

// export const filterProducts = filter => ({ type: 'FILTER_PRODUCTS', filter })
export const selectProduct = product => ({ type: "SELECT_PRODUCT", product })
export const setCurrentPage = currentPage => ({ type: "SET_CURRENT_PAGE", currentPage })
export const setFilter = filter => ({ type: "SET_FILTER", filter })
// export const initialValuesForm = product => ({ type: "INITIAL_VALUES_FORM" }, product)

const API_URL = "http://127.0.0.1:3050"

export const getAllProducts = () => dispatch => {
  axios
    .get(`${API_URL}/libros`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })
    .then(response => {
      console.log(response)
      dispatch({ type: "RECEIVE_PRODUCTS", products: response.data })
    })
    .catch(error => {
      console.log(error)
    })
}

export const filterProducts = filter => ({ type: "FILTER_PRODUCTS", filter })
// export const filterProducts = filter => dispatch => {
//   axios
//     .get(`${API_URL}/libros/${filter}`, {
//       headers: {
//         "Access-Control-Allow-Origin": "*"
//       }
//     })
//     .then(response => {
//       console.log(response.data)
//       dispatch({ type: "FILTER_PRODUCTS", filtered: response.data })
//     })
//     .catch(error => {
//       console.log(error)
//     })
// }

export const saveProducts = product => dispatch => {
  console.log("Enviando al save:", product)

  axios
    .post(`${API_URL}/libros`, product, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })
    .then(response => {
      dispatch({ type: "SAVE_PRODUCTS_OK", product: product })
    })
    .catch(error => {
      console.log(error)
    })
}

export const deleteProducts = product => dispatch => {
  console.log("Enviando al delete:", product)

  axios
    .delete(`${API_URL}/libros/${product.id}`)
    .then(response => {
      dispatch({ type: "DELETE_PRODUCTS_OK", product: product })
    })
    .catch(error => {
      console.log(error)
    })
}

export const updateProducts = product => dispatch => {
  console.log("Enviando al update:", product)

  axios
    .put(`${API_URL}/libros/${product.id}`, product)
    .then(response => {
      dispatch({ type: "UPDATE_PRODUCTS_OK", product: product })
    })
    .catch(error => {
      console.log(error)
    })
}
