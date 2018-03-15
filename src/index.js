import React from 'react';
import ReactDOM from 'react-dom';
import './Loader.css';
import registerServiceWorker from './registerServiceWorker';
import Loader from './Loader';
import semantic from 'semantic-ui-react'
import './semantic/dist/src';


ReactDOM.render(<Loader />, document.getElementById('root'));
registerServiceWorker();
