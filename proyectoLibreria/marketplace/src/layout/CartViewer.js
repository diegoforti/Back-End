import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import React from 'react';

const mapStateToProps = (state) => ({
  items: state.cart
});

function CartViewer(props) {
  return (
    <NavLink
      exact
      className="nav-link"
      to="/cart"
      activeClassName="active">
      <i className="fa fa-shopping-cart"></i> ({props.items.length})
    </NavLink>
  );
}

export default connect(mapStateToProps)(CartViewer);