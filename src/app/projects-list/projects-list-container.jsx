import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ProjectsListComponent } from './projects-list-component';
import { getProjectsState } from './reducer';
import { getProjects } from './actions';
import './projects-list.css';

class ProjectsList extends Component {
  static propTypes = {
    getProjects: PropTypes.func.isRequired,
    projectsState: PropTypes.object.isRequired, // eslint-disable-line
  };
  componentDidMount() {
    this.props.getProjects({});
  }
  render() {
    const { projectsState } = this.props;
    return <ProjectsListComponent {...projectsState} />;
  }
}

const mapStateToProps = state => ({
  projectsState: getProjectsState(state),
});

export default connect(mapStateToProps, {
  getProjects,
})(ProjectsList);
