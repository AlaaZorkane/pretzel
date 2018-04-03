import React, { Component } from 'react';
import semantic from 'semantic-ui-react'
import '../semantic/src/dist/semantic.min.css';
import Login from './Login.css'

export default class Load extends Component {
    render() {
        return ( <div>
        <div id='background'></div>
        <h1 className='logo'>Pretzel!</h1> //a
        </div>
        )
    }
}
