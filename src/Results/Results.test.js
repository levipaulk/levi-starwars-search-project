import React from 'react';
import ReactDOM from 'react-dom';
import Results from './Results';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Results results={[]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});