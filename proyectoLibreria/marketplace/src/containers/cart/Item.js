import React from "react"

export default function Item(props) {
  const { checkProductStock, incrementProduct, item, removeProduct } = props
  return (
    <tr>
      <td>{item.title}</td>
      <td>
        <button className="btn btn-danger" onClick={() => checkProductStock(item.id)}>
          -
        </button>
        &nbsp;{item.quantity}&nbsp;
        <button className="btn btn-success" onClick={() => incrementProduct(item.id)}>
          +
        </button>
      </td>
      <td>{item.precio}</td>
      <td>{item.quantity * item.precio}</td>
      <td>
        <button type="button" className="btn btn-danger" onClick={() => removeProduct(item.id)}>
          <i className="fa fa-trash" />
        </button>
      </td>
    </tr>
  )
}
