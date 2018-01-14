import React from 'react';
import { render } from 'react-dom';
import Hello from './components/Hello';
import Search from './components/Search';

import './index.css';

const App = () => (
  <div>
    <Search />
  </div>
);



render(<App />, document.getElementById('root'));
