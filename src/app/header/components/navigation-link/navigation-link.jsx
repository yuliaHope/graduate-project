import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './navigation-link.css';

const NavigationLink = ({ label, href }) => (
  <NavLink className="nav-link" activeClassName="active" to={href}>
    {label}
  </NavLink>
);

NavigationLink.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default NavigationLink;
