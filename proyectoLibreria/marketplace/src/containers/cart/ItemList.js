import Item from './Item';
import React from 'react';

export default function ItemList(props) {
  return (
    <table className="table table-hover table-bordered">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Item</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Precio</th>
          <th scope="col">Total por item</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          props.items.map(item => <Item key={item.id} item={item} {...props} />)
        }
      </tbody>
    </table>
  );
}