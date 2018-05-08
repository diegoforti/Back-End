export const addProduct = product => ({ type: "ADD_PRODUCT", product })
export const checkProductExistence = product => (dispatch, getState) => {
  const index = getState().cart.findIndex(i => i.id === product.id)

  if (index !== -1) {
    dispatch(incrementProduct(product.id))
  } else {
    dispatch(addProduct(product))
  }
}
export const checkProductStock = id => (dispatch, getState) => {
  const item = getState().cart.find(i => i.id === id)

  if (item.quantity === 1) {
    dispatch(removeProduct(id))
  } else {
    dispatch(decrementProduct(id))
  }
}
export const decrementProduct = id => ({ type: "DECREMENT_PRODUCT", id })
export const incrementProduct = id => ({ type: "INCREMENT_PRODUCT", id })
export const removeProduct = id => ({ type: "REMOVE_PRODUCT", id })
