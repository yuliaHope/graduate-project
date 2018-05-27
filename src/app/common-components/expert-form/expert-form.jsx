import React from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

import Question from '../question-component/question-component';

import './expert-form.css';

const styles = {
  input: {
    width: 70,
    marginRight: 15,
  },
  radioButton: {
    marginBottom: 16,
  },
};

export class ExpertFormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props.data.staff,
      ...props.data.expences,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...nextProps.data.staff,
      ...nextProps.data.expences,
    });
  }

  handleOnChange = dataKey => event => {
    const { name, value } = event.target;
    const [field, key] = name.split('_');
    const nextData = { ...this.state[key], [field]: value };
    this.setState({ [key]: nextData });
    this.props.updateSelection(dataKey, { [key]: nextData });
  };

  render() {
    const { staff, expences } = this.props.data;
    return (
      <div>
        <div className="label">Staff:</div>
        <div className="input-part" onChange={this.handleOnChange('staff')}>
          <div className="input-labels">
            <span>Time</span>
            <span>Count</span>
            <span>Salary</span>
          </div>
          {Object.keys(staff).map(key => {
            const formState = this.state[key];
            return (
              <div key={key}>
                <Question />
                <span className="fixed-width-labels">{key}</span>
                <TextField name={`time_${key}`} value={formState.time} type="number" style={styles.input} />
                <TextField name={`count_${key}`} value={formState.count} type="number" style={styles.input} />
                <TextField name={`salary_${key}`} value={formState.salary} type="number" style={styles.input} />
              </div>
            );
          })}
        </div>

        <div className="label">Other:</div>
        <div className="input-part" onChange={this.handleOnChange('expences')}>
          {Object.keys(expences).map(key => (
            <div key={key}>
              <Question />
              <span className="fixed-width-labels">{key}</span>
              <TextField name={`value_${key}`} value={this.state[key].value} type="number" style={styles.input} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

ExpertFormComponent.propTypes = {
  data: PropTypes.shape({
    staff: PropTypes.shape({}),
    expences: PropTypes.shape({}),
  }).isRequired,
  updateSelection: PropTypes.func,
};

ExpertFormComponent.defaultProps = {
  updateSelection: () => {},
};
