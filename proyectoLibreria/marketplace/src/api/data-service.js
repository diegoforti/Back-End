import axios from "axios"

const API_URL = "http://127.0.0.1:3050"
// const API_URL = "https://fierce-plains-56713.herokuapp.com"

export function getProducts() {
  return function(dispatch) {
    axios
      .get(`${API_URL}/productos`, {
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(response => {
        console.log(response.data)
        dispatch({ type: "RECEIVE_PRODUCTS", products: response })
      })
      .catch(error => {
        console.log(error)
      })
  }
}
