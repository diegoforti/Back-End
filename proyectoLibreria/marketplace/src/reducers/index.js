import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import cartReducer from "./cartReducer"
import homeReducer from "./homeReducer"
import { reducer as formReducer } from "redux-form"

import { getAllProducts } from "../actions/homeActions"

const rootReducer = combineReducers({
  cart: cartReducer,
  home: homeReducer,
  form: formReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

store.dispatch(getAllProducts())

export default store
