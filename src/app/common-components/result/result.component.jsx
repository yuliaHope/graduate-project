import React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import Question from '../question-component/question-component';

// import './fp-form.css';

const formItems = [
  {
    label: 'COCOMO',
    value: 7,
    measurementValue: 'man/month',
  },
  {
    label: 'Expert',
    value: 6.5,
    measurementValue: 'man/month',
  },
  {
    label: 'Expences',
    value: '140000',
    measurementValue: '$',
  },
  {
    label: 'Net profit',
    value: '200000',
    measurementValue: '$',
  },
];

export class ResultComponent extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        {formItems.map(item => (
          <div key={item.label}>
            <span className="label">
              {item.label}: {'  '}
              {item.value}
              {item.measurementValue}
            </span>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
