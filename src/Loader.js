import React, { Component } from 'react';
import './Loader.css';
import ReactDOM from 'react-dom'

const Pretzel = () => (
    <div className="loaderMain">
        <div className="background">
            <h2 className="logo" id="salt">{randomText}</h2>
            <h1 className="logo" id="logo" onMouseLeave={out} onMouseEnter={enter}>Pretzel!</h1>
        </div>
    </div>
)

function out() {
    var x = document.getElementById("salt");
    x.style.opacity = 0
}
function enter() {
    var x = document.getElementById("salt");
    x.style.opacity = 1
}
function getRandomText() {
    var txts = ["Pretzely, Pretzely...", 
                "Elegant, Fast and uhh 0 salt ?",
                "You won't get swiped left here",
                "Your music here and everywhere!",
                "<> with ❤",
                "Tired of Tinder? Welcome :)",
                "We love music as much as you do!",
                "Makes Tinder look old",
                "Sync, listen, and match!",
                "More than just a Music Player!"]
    let index = Math.round(Math.random() * (txts.length - 1))
    return txts[index]
  }
let randomText = getRandomText()

export default Pretzel;
