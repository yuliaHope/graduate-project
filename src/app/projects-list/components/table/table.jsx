import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import PropTypes from 'prop-types';

// import { TotalUsersContainer } from './analytics-users.styled';
import { gridColumns } from './constants';
import Pagination from '../../../common-components/pagination';
import './table.css';

const ProjectsTable = ({ projects, loaded, className }) => (
  <div className={className}>
    {/* <TotalUsersContainer>Total users count {totalUsersCount}</TotalUsersContainer> */}
    <ReactTable
      className="-striped -highlight"
      defaultPageSize={Number.MAX_SAFE_INTEGER}
      filterable
      loading={!loaded}
      data={projects}
      columns={gridColumns}
      minRows={0}
      pageSize={projects.length}
      showPagination={false}
    />
    <Pagination limit={10} offset={0} totalPage={1} />
  </div>
);

ProjectsTable.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object),
  loaded: PropTypes.bool,
  className: PropTypes.string,
};

ProjectsTable.defaultProps = {
  projects: [],
  loaded: false,
  className: '',
};

export default ProjectsTable;
