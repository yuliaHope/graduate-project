import React from 'react';
import PropTypes from 'prop-types';

import { NavigationLink } from '../navigation-link';
import './navigation.css';

const mapItems = items => items.map(link => <NavigationLink {...link} key={link.href} />);
const Navigation = ({ items }) => <ul>{mapItems(items)}</ul>;

Navigation.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

Navigation.defaultProps = {
  items: [],
};

export default Navigation;
