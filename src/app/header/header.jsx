import React from 'react';

import { Navigation } from './components/navigation';
import { menuLinks } from './constants';
import './header.css';

const Header = () => (
  <header>
    <Navigation items={menuLinks} />
  </header>
);

export default Header;
