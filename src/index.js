import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/app';


const MyFirstComponent = React.createElement(
  'h1', 
  { style: { color: 'cornflowerblue' } }, 
  'Welcome to React!'
);

ReactDOM.render(
  <App/>, document.getElementById('root')
);
