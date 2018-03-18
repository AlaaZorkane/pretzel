import React, { Component } from 'react';
import './Loader.css';
import ReactDOM from 'react-dom'

const Pretzel = () => (
    <div className="loaderMain">
        <div className="background">
            <h2 className="logo" id="salt">Elegant, fast, and with 0 salt.</h2>
            <h1 className="logo" id="logo" onMouseLeave={out} onMouseEnter={enter}>Pretzel!</h1>
        </div>
    </div>
)

function out() {
    console.log('OUT')
}
function enter() {
    console.log('enter')
}

export default Pretzel;
