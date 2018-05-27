import React from 'react';

import SimpleLineChart from '../common-components/bar-chart/bar-chart';

import './statistics.css';

const timeData = [
  {
    name: 'Permissions Manager',
    cocomo: 9,
    real: 4,
    expert: 5,
    amt: 2100,
  },
  {
    name: 'List Manager',
    cocomo: 14,
    real: 3,
    expert: 12,
    amt: 2100,
  },
];

const moneyData = [
  {
    name: 'Permissions Manager',
    cocomo: 120000,
    real: 200000,
    expert: 150000,
  },
  {
    name: 'List Manager',
    cocomo: 20000,
    real: 10000,
    expert: 21000,
  },
];

const StatisticsComponent = () => (
  <React.Fragment>
    <div className="chart-container">
      <h1>Time</h1>
      <SimpleLineChart data={timeData} />
    </div>
    <div className="chart-container">
      <h1>Cost</h1>
      <SimpleLineChart data={moneyData} />
    </div>
  </React.Fragment>
);

export default StatisticsComponent;
