import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import testdata from './testdata';

ReactDOM.render(<App testdata={testdata} />, document.getElementById('root'));