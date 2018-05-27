import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import ProjectInfoComponent from './project-info.component';
import {
  getFPFilesState,
  getFPVAFState,
  getCocomoState,
  getExpertStaffState,
  getExpertExpencesState,
  getResult,
} from './reducer';
import { getFP, getCocomo, getExpert } from './actions';
import './project-info.css';

class ProjectInfoUI extends Component {
  static propTypes = {
    getFP: PropTypes.func.isRequired,
    getCocomo: PropTypes.func.isRequired,
    getExpert: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,
    fpFiles: PropTypes.shape({}).isRequired,
    cocomo: PropTypes.shape({}).isRequired,
    expertStaff: PropTypes.shape({}).isRequired,
    result: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    fpVAF: PropTypes.shape({}).isRequired,
    expertExpences: PropTypes.shape({}).isRequired,
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getFP(id);
    this.props.getCocomo(id);
    this.props.getExpert(id);
  }

  render() {
    const {
      fpFiles, fpVAF, cocomo, expertStaff, expertExpences, result,
    } = this.props;
    return (
      <ProjectInfoComponent
        fpFiles={fpFiles}
        fpVAF={fpVAF}
        cocomo={cocomo}
        expertStaff={expertStaff}
        expertExpences={expertExpences}
        result={result}
      />
    );
  }
}

const mapStateToProps = state => ({
  fpFiles: getFPFilesState(state),
  fpVAF: getFPVAFState(state),
  cocomo: getCocomoState(state),
  expertStaff: getExpertStaffState(state),
  expertExpences: getExpertExpencesState(state),
  result: getResult(state),
});

const ProjectInfo = connect(mapStateToProps, {
  getFP,
  getCocomo,
  getExpert,
})(withRouter(ProjectInfoUI));

export default ProjectInfo;
