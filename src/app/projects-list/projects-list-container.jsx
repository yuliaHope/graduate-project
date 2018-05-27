import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ProjectsListComponent } from './projects-list-component';
import { getProjectsState } from './reducer';
import { getProjects } from './actions';
import { history } from '../store';
import './projects-list.css';

class ProjectsList extends Component {
  static propTypes = {
    getProjects: PropTypes.func.isRequired,
    projectsState: PropTypes.object.isRequired, // eslint-disable-line
  };

  componentDidMount() {
    this.props.getProjects({});
  }

  handleRowSelection = rowInfo => {
    const { projects } = this.props.projectsState;
    history.push(`/projects/${projects[rowInfo.index].id}`);
  };

  render() {
    const { projectsState } = this.props;
    return <ProjectsListComponent {...projectsState} selectRow={this.handleRowSelection} />;
  }
}

const mapStateToProps = state => ({
  projectsState: getProjectsState(state),
});

export default connect(mapStateToProps, {
  getProjects,
})(ProjectsList);
