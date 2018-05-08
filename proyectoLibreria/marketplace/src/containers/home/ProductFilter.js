import React from 'react';

export default function ProductFilter(props) {
  const { filter, filterProducts, setFilter } = props;
  return (
    <div className="row justify-content-center">
      <div className="col-xs-8 pt-3 mb-3">
        <form className="form-inline" onSubmit={e => {
          e.preventDefault();
          filterProducts(filter);
          setFilter('');
        }}>
          <div className="form-group mx-sm-3 mb-2">
            <input
              type="text"
              className="form-control"
              onChange={e => setFilter(e.target.value)}
              placeholder="Que estas buscando?"
              value={filter}
            />
          </div>
          <button type="submit" className="btn btn-primary mb-2">Buscar</button>
        </form>
      </div>
    </div>
  );
}