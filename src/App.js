import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
console.log(Component);

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: 'Nhat Hoang',
        biography: '31 year old Designer / Developer living in Portland. Love to make stuff.',
      },
      image: 'src="../public/IMG_0206.JPG"',
      quote: {
        content: 'A bed is a great place to sleep, but the best place is on the laptop while daddy is working.',
        source: 'The Secret Life of Nemo, 13 year old dlh cat.'
      }

    };
  }
  render() {
      return(
        <div className="App">
          <Image src={this.state.image} />
          <Profile person={this.state.person} quote={this.state.quote} />
        </div>
      );
    }
  }

function Image(props){
    return (
      <div className="Image" style={{backgroundImage: 'props.src'}}></div>
    );
}
function Profile(props){
  return (
      <div className="Profile">
        <h1 className="Name">{props.person.name}</h1>
        <p className="Bio">{props.person.biography}</p>
        <div className="Quote">
          <blockquote>&ldquo; {props.quote.content} &rdquo;</blockquote>
          <div className="byline">&mdash; {props.quote.source}</div>
        </div>

      </div>
    );
}
export default App;
