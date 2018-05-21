import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import './filters-panel.css';

const filters = ['W1', 'W2', 'W3', 'W4', 'W5', 'PERS', 'RCPX', 'RUSE', 'PDIF', 'PREX', 'FCIL', 'SCED'];
const styles = { width: 150 };

export const FiltersPanel = () => {
  return (
    <ul className="filters">
      {filters.map(filter => (
        <li key={filter} className="filter-item">
          <span>{filter}</span>
          <DropDownMenu style={styles} value={1} onChange={this.handleChange}>
            <MenuItem value={1} primaryText="0" />
            <MenuItem value={2} primaryText="Every Night" />
            <MenuItem value={3} primaryText="Weeknights" />
            <MenuItem value={4} primaryText="Weekends" />
            <MenuItem value={5} primaryText="Weekly" />
          </DropDownMenu>
        </li>
      ))}
    </ul>
  );
};
