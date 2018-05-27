import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import ArrowForwardIcon from 'material-ui/svg-icons/navigation/arrow-forward';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { FpFormComponent } from '../common-components/fp-form/fp-form.component';
import { CocomoFormComponent } from '../common-components/cocomo-form/cocomo-form';
import { ExpertFormComponent } from '../common-components/expert-form/expert-form';
import { getCocomoState, getFPState, getExpertState } from './reducer';
import { saveData, updateStore } from './actions';

import './new-project.css';

const stepKeys = ['fp', 'cocomo', 'expert'];

class NewProgectContainer extends React.Component {
  static propTypes = {
    cocomo: PropTypes.shape({}).isRequired,
    fp: PropTypes.shape({}).isRequired,
    expert: PropTypes.shape({}).isRequired,
    saveData: PropTypes.func.isRequired,
    updateStore: PropTypes.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      stepIndex: 0,
    };
    const { cocomo, fp, expert } = props;
    this.data = { cocomo, fp, expert };
  }

  componentWillReceiveProps(nextProps) {
    const { cocomo, fp, expert } = nextProps;
    this.data = { cocomo, fp, expert };
  }

  getStepContent = stepIndex => {
    const { cocomo, fp, expert } = this.props;
    switch (stepIndex) {
      case 0:
        return <FpFormComponent data={fp} updateSelection={this.updateData('fp')} />;

      case 1:
        return <CocomoFormComponent data={cocomo} updateSelection={this.updateData('cocomo')} />;

      case 2:
        return <ExpertFormComponent data={expert} updateSelection={this.updateData('expert')} />;
      default:
        return null;
    }
  };

  updateData = key => (field, data) => {
    const prevData = this.data[key][field];
    this.data[key][field] = { ...prevData, ...data };
  };

  handleNext = () => {
    const { stepIndex } = this.state;
    const key = stepKeys[stepIndex];
    this.props.updateStore({ key, data: this.data[key] });

    if (stepIndex < 2) {
      this.setState({ stepIndex: stepIndex + 1 });
    } else if (stepIndex === 2) {
      this.props.saveData(this.data);
    }
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    const key = stepKeys[stepIndex];
    this.props.updateStore({ key, data: this.data[key] });

    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  render() {
    const { stepIndex } = this.state;

    return (
      <div className="stepper" style={{ width: '100%', maxWidth: 700, margin: 'auto' }}>
        <Stepper activeStep={stepIndex} connector={<ArrowForwardIcon />}>
          <Step>
            <StepLabel>Select FP settings</StepLabel>
          </Step>

          <Step>
            <StepLabel>Select COCOMO settings</StepLabel>
          </Step>

          <Step>
            <StepLabel>Fill Expert Form</StepLabel>
          </Step>
        </Stepper>

        <div className="stepper-content">{this.getStepContent(stepIndex)}</div>

        <div style={{ marginTop: 24, marginBottom: 12 }}>
          <FlatButton label="Back" disabled={stepIndex === 0} onClick={this.handlePrev} style={{ marginRight: 12 }} />
          <RaisedButton label={stepIndex === 2 ? 'Finish' : 'Next'} primary onClick={this.handleNext} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cocomo: getCocomoState(state),
  fp: getFPState(state),
  expert: getExpertState(state),
});

export default connect(mapStateToProps, {
  saveData,
  updateStore,
})(NewProgectContainer);
