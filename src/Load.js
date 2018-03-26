import React, { Component } from 'react';
import './Loader.css';
import ogg from './assets/pretzel.ogg'
import part from './assets/part.gif'


function RandomText() {
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
    var index = Math.round(Math.random() * (txts.length - 1))
    return <h2 className="logo" id="salt">{txts[index]}</h2>;
}
function Loading() {
    return <img src={part} id="kid"/>;
}
function play(){
    var audio = document.getElementById("audio");
    var x = document.getElementById("salt");
    if ( x.style.opacity >= 1 ) {
        console.log("UP")
    } else {
        audio.play();
    }
    }
function enter() {
    var salt = document.getElementById("salt");
    salt.style.opacity = 1
}
export default class Load extends Component {
    async onMouseEnter(event) {
        play();
        enter();
     }
  render() {
    return (
    <div className="loaderMain">
        <div className="background">
            <RandomText />
            <h1 className="logo" id="logo" onMouseEnter={this.onMouseEnter}>Pretzel!</h1>
            <audio id="audio" src={ogg} ></audio>
            <Loading />
        </div>
    </div>
    )
  }
}