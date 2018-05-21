import React from 'react';

import ProjectsTable from './components/table';
import { FiltersPanel } from './components/filters-panel';

export const ProjectsListComponent = props => {
  return (
    <div className="container">
      <ProjectsTable className="table" {...props} />
      <FiltersPanel />
    </div>
  );
};
