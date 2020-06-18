/** @format */

import React, { Component } from 'react';
import './App.css';
import ChatBoard from './components/ChatBoard';
import ChatButton from './components/ChatButton';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showBoard: '',
      primaryColor: '#1082ff',
      secondaryColor: '#ffffff',
    };
  }
  handleButton = (e) => {
    this.setState({ showBoard: !this.state.showBoard });
  };

  componentDidMount() {
    fetch('http://localhost:4000/example')
      .then((response) => {
        return response.json();
      })
      .then((data) => this.setState({ primaryColor: data.color }));
  }

  render() {
    return (
      <div className='App'>
        <div
          className={`chat-container ${
            this.state.showBoard ? 'hide-background' : ''
          }`}
        >
          <div className={`chat-message ${this.state.showBoard ? 'hide' : ''}`}>
            <h1>Call To Action</h1>
            <h4>Lorem ipsum dolor sit amet.</h4>
          </div>
          <ChatBoard
            primaryColor={this.state.primaryColor}
            showBoard={this.state.showBoard}
          />
          <ChatButton
            handleButton={this.handleButton}
            primaryColor={this.state.primaryColor}
          />
        </div>
      </div>
    );
  }
}

export default App;
