import React from 'react';

export default function ProductPagination(props) {
  const { currentPage, itemsPerPage, filteredProducts, setCurrentPage } = props;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const links = [];

  for (let i = 1; i <= totalPages; i++) {
    links.push(
      (
        <button type="button" className={`btn btn-primary ${i === currentPage ? 'active' : ''}`} key={i} onClick={() => setCurrentPage(i)}>{i}</button>
      )
    );
  }

  return (
    totalPages > 1 &&
    <div className="pagination justify-content-center">
      <div className="btn-group" role="group">
        {
          <button type="button" className="btn btn-primary" disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>&laquo;</button>
        }
        {links}
        {
          <button type="button" className="btn btn-primary" disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>&raquo;</button>
        }
      </div>
    </div>
  );
}