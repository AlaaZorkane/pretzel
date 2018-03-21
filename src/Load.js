import React, { Component } from 'react';
import './Loader.css';
import {Howl, Howler} from 'howler';
import './assets/pretzel.ogg';


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
function sound() {
    var salt = document.getElementById("salt");
    const sound = new Howl({
        src: ['pretzel.ogg']
      });
    if ( salt.style.opacity = 1 ) {
        console.log('batatiss');
        sound.play();
    }
}
function enter() {
    var salt = document.getElementById("salt");
    salt.style.opacity = 1
}
export default class Load extends Component {
    onMouseEnter(event) {
        enter();
        sound();
     }
  render() {
    return (
    <div className="loaderMain">
        <div className="background">
            <RandomText />
            <h1 className="logo" id="logo" onMouseEnter={this.onMouseEnter}>Pretzel!</h1>
        </div>
    </div>
    )
  }
}