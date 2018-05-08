import React from "react"
import { connect } from "react-redux"
import { Field, reduxForm } from "redux-form"
import { selectProduct } from "../../actions/homeActions"
import { NavLink } from "react-router-dom"

var initialValues = { titulo: "valor inicial------" }

let formProduct = props => {
  const { handleSubmit, pristine, reset, submitting, saveProducts, selectedProduct } = props
  initialValues = selectedProduct
  return (
    <form
      onSubmit={handleSubmit(product => {
        saveProducts(product)
      })}
    >
      <div className="form-group row">
        <label htmlFor="example-text-input" className="col-3 col-form-label">
          Título
        </label>
        <div className="col-9">
          <Field
            className="form-control"
            name="titulo"
            component="input"
            type="text"
            placeholder="Título"
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="example-text-input" className="col-3 col-form-label">
          Resumen
        </label>
        <div className="col-9">
          <Field
            className="form-control"
            name="resumen"
            component="input"
            type="text"
            placeholder="Resumen"
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="example-text-input" className="col-3 col-form-label">
          Autor
        </label>
        <div className="col-9">
          <Field
            className="form-control"
            name="autor"
            component="input"
            type="text"
            placeholder="Autor"
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="example-text-input" className="col-3 col-form-label">
          Editorial
        </label>
        <div className="col-9">
          <Field className="form-control" name="editorial" component="select">
            <option />
            <option value="Planeta">Planeta</option>
            <option value="Kairos">Kairos</option>
            <option value="Ateneo">Ateneo</option>
          </Field>
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="example-text-input" className="col-3 col-form-label">
          Imagen Portada
        </label>
        <div className="col-9">
          <Field
            className="form-control"
            name="imageUrl"
            component="input"
            type="text"
            placeholder="Imagen Portada"
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="example-text-input" className="col-3 col-form-label">
          Precio
        </label>
        <div className="col-9">
          <Field
            className="form-control"
            name="precio"
            component="input"
            type="number"
            placeholder="Precio"
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="example-text-input" className="col-3 col-form-label">
          Stock
        </label>
        <div className="col-9">
          <Field
            className="form-control"
            name="stock"
            component="input"
            type="number"
            placeholder="Stock"
          />
        </div>
      </div>

      <button
        className="btn btn-primary col-3 offset-4"
        type="submit"
        to="/home"
        disabled={pristine || submitting}
      >
        Guardar
      </button>

      <NavLink
        exact
        className="card-link"
        to="/home"
        activeClassName="active"
        onClick={saveProducts}
      >
        Editar
      </NavLink>

      <button
        className="btn btn-secondary pull-right col-4 offset-1"
        type="button"
        disabled={pristine || submitting}
        onClick={reset}
      >
        Limpiar
      </button>
    </form>
  )
}

// export default reduxForm({
//   form: "formProduct"
// })(formProduct)

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
formProduct = reduxForm({
  form: "formProduct", // a unique identifier for this form
  enableReinitialize: true
})(formProduct)

// You have to connect() to any reducers that you wish to connect to yourself
formProduct = connect(
  state => ({
    initialValues: initialValues // pull initial values from account reducer
  })
  // ,{ load: selectProduct } // bind account loading action creator
)(formProduct)

export default formProduct
