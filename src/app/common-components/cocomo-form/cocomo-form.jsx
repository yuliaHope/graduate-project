import React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import PropTypes from 'prop-types';

import Question from '../question-component/question-component';

import './cocomo-form.css';

const styles = {
  input: {
    width: 70,
    marginRight: 15,
  },
  radioButton: {
    marginBottom: 16,
  },
  iconStyles: {
    marginRight: 24,
  },
};

export const CocomoFormComponent = ({ data, updateSelection }) => {
  const handleSelection = event => {
    const { name, value } = event.target;
    updateSelection(name, { ...data[name], value });
  };

  return (
    <div onChange={handleSelection}>
      {Object.keys(data).map(key => (
        <div key={key}>
          <span className="label">
            {key}
            {'  '}
            <Question />
          </span>
          <RadioButtonGroup className="radio-group" name={key} valueSelected={data[key].value} defaultSelected="0">
            <RadioButton value="0" label="0" style={styles.radioButton} />
            <RadioButton value="1" label="1" style={styles.radioButton} />
            <RadioButton value="2" label="2" style={styles.radioButton} />
            <RadioButton value="3" label="3" style={styles.radioButton} />
            <RadioButton value="4" label="4" style={styles.radioButton} />
            <RadioButton value="5" label="5" style={styles.radioButton} />
          </RadioButtonGroup>
        </div>
      ))}
    </div>
  );
};

CocomoFormComponent.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line
  updateSelection: PropTypes.func,
};

CocomoFormComponent.defaultProps = {
  updateSelection: () => {},
};
