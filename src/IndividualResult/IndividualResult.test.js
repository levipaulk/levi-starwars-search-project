import React from 'react';
import ReactDOM from 'react-dom';
import IndividualResult from './IndividualResult';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IndividualResult />, div);
  ReactDOM.unmountComponentAtNode(div);
});