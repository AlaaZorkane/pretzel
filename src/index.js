import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Login from './components/Login';
import semantic from 'semantic-ui-react'
import './semantic/src/dist/semantic.min.css';


ReactDOM.render(<Login />, document.getElementById('root'));
registerServiceWorker();
