import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import Cart from "./containers/cart/Cart"
import Footer from "./layout/Footer"
import Home from "./containers/home/Home"
import Menu from "./layout/Menu"
import Product from "./containers/product/Product"
import React from "react"
import ProductAdmin from "./containers/admin/ProductAdmin"

const App = () => (
  <BrowserRouter>
    <section>
      <Menu />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/producto/:productId" component={Product} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/admin" component={ProductAdmin} />
          <Redirect from="" to="/" />
        </Switch>
      </div>
      <Footer />
    </section>
  </BrowserRouter>
)

export default App
