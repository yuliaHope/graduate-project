import React from 'react';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';
import 'react-table/react-table.css';

import { metricsColumns, expertColumns, fpFilesColumns, expertExpencesColumns } from './constants';
import './project-info.css';

const ProjectInfoComponent = ({
  fpFiles, fpVAF, cocomo, expertStaff, expertExpences, result,
}) => (
  <React.Fragment>
    <div className="label choose-language-container">
      <div>FP:</div>
      <div>
        <i className="material-icons">save_alt</i>
      </div>
    </div>
    <ReactTable
      className="-striped -highlight"
      filterable
      loading={!fpFiles.loaded}
      data={fpFiles.data}
      columns={fpFilesColumns}
      minRows={0}
      showPagination={false}
    />
    <ReactTable
      className="-striped -highlight"
      filterable
      loading={!fpVAF.loaded}
      data={fpVAF.data}
      columns={metricsColumns}
      minRows={0}
      showPagination={false}
    />
    <div className="label">COCOMO: </div>
    <ReactTable
      className="-striped -highlight"
      filterable
      loading={!cocomo.loaded}
      data={cocomo.data}
      columns={metricsColumns}
      minRows={0}
      showPagination={false}
    />
    <div className="label">Expert: </div>
    <ReactTable
      className="-striped -highlight"
      filterable
      loading={!expertStaff.loaded}
      data={expertStaff.data}
      columns={expertColumns}
      minRows={0}
      showPagination={false}
    />
    <ReactTable
      className="-striped -highlight"
      filterable
      loading={!expertExpences.loaded}
      data={expertExpences.data}
      columns={expertExpencesColumns}
      minRows={0}
      showPagination={false}
    />
    <div className="main-result">
      {result.map(item => (
        <div key={item.label}>
          <span className="label">
            {item.label}: {'  '}
            <span style={{ color: item.color }}>
              {item.value} {item.measurementValue}
            </span>
          </span>
        </div>
      ))}
    </div>
  </React.Fragment>
);

ProjectInfoComponent.propTypes = {
  fpFiles: PropTypes.shape({}),
  fpVAF: PropTypes.shape({}),
  cocomo: PropTypes.shape({}),
  expertStaff: PropTypes.shape({}),
  expertExpences: PropTypes.shape({}),
  result: PropTypes.arrayOf(PropTypes.shape({})),
};

ProjectInfoComponent.defaultProps = {
  fpFiles: {},
  fpVAF: {},
  cocomo: {},
  expertStaff: {},
  expertExpences: {},
  result: [],
};

export default ProjectInfoComponent;
