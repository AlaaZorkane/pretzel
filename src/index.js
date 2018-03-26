import React from 'react';
import ReactDOM from 'react-dom';
import './Loader.css';
import './loading.css';
import registerServiceWorker from './registerServiceWorker';
import Load from './Load';
import semantic from 'semantic-ui-react'
import './semantic/src/dist/semantic.min.css';


ReactDOM.render(<Load />, document.getElementById('root'));
registerServiceWorker();
