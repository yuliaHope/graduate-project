import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import PropTypes from 'prop-types';

import { gridColumns } from './constants';
import './table.css';

const ProjectsTable = ({
  projects, loaded, className, selectRow,
}) => (
  <div className={className}>
    <ReactTable
      className="-striped -highlight ptojects-table"
      defaultPageSize={Number.MAX_SAFE_INTEGER}
      filterable
      loading={!projects.length && !loaded}
      data={projects}
      columns={gridColumns}
      minRows={0}
      pageSize={10}
      getTdProps={(state, rowInfo) => ({
          onClick: (e, handleOriginal) => {
            selectRow(rowInfo);
            if (handleOriginal) {
              handleOriginal();
            }
          },
        })}
      showPagination
    />
  </div>
);

ProjectsTable.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object),
  loaded: PropTypes.bool,
  className: PropTypes.string,
  selectRow: PropTypes.func,
};

ProjectsTable.defaultProps = {
  projects: [],
  loaded: false,
  className: '',
  selectRow: () => {},
};

export default ProjectsTable;
