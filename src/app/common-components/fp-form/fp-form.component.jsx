import React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import PropTypes from 'prop-types';

import Question from '../question-component/question-component';

import './fp-form.css';

const styles = {
  input: {
    width: 70,
    marginRight: 15,
  },
  radioButton: {
    marginBottom: 16,
  },
};

const placeholder = 'Enter details';

export class FpFormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props.data.files,
      ...props.data.language,
    };
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    const [field, key] = name.split('_');
    const nextData = { ...this.state[key], [field]: value };
    this.setState({ [key]: nextData });
    this.props.updateSelection('files', { [key]: nextData });
  };

  handleLanguageChange = (event, key, value) => {
    const nextData = { ...this.state.language, value };
    this.setState({ language: nextData });
    this.props.updateSelection('language', nextData);
  };

  handleRadioChange = event => {
    const { name, value } = event.target;
    const {
      data: { factors },
      updateSelection,
    } = this.props;
    updateSelection('factors', { [name]: { ...factors[name], value } });
  };

  render() {
    const { files, language, factors } = this.props.data;
    return (
      <React.Fragment>
        <div className="input-part">
          <div onChange={this.handleOnChange}>
            <div className="input-labels">
              <span>RET</span>
              <span>DET</span>
            </div>

            {Object.keys(files).map((key, index) => {
              const formState = this.state[key];
              return (
                <div key={key}>
                  <div className={!index ? 'choose-language-container' : ''}>
                    <div>
                      <Question />
                      <span className="fixed-width-labels">{key}</span>
                      <TextField name={`ret_${key}`} value={formState.ret} type="number" style={styles.input} />
                      <TextField name={`det_${key}`} value={formState.det} type="number" style={styles.input} />
                    </div>
                    {!index && (
                      <div className="filter-item">
                        Choose language:
                        <DropDownMenu value={language.value} onChange={this.handleLanguageChange}>
                          <MenuItem value={0} primaryText="JavaScript" />
                          <MenuItem value={2} primaryText="Java" />
                          <MenuItem value={1} primaryText="C++" />
                          <MenuItem value={3} primaryText="C#" />
                        </DropDownMenu>
                      </div>
                    )}
                  </div>
                  <div>
                    <TextField
                      name={`description_${key}`}
                      value={formState.description}
                      hintText={placeholder}
                      fullWidth
                      type="text"
                      multiLine
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div onChange={this.handleRadioChange}>
          {Object.keys(factors).map(key => (
            <div key={key}>
              <span className="label">
                {key}
                {'  '}
                <Question />
              </span>
              <RadioButtonGroup
                className="radio-group"
                name={key}
                valueSelected={factors[key].value}
                defaultSelected="0"
              >
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
      </React.Fragment>
    );
  }
}

FpFormComponent.propTypes = {
  data: PropTypes.shape({
    files: PropTypes.shape({}),
    language: PropTypes.shape({}),
    factors: PropTypes.shape({}),
  }).isRequired,
  updateSelection: PropTypes.func,
};

FpFormComponent.defaultProps = {
  updateSelection: () => {},
};
