/** @format */

import React, { Component } from 'react';
import './App.css';
import { service } from './services/initService';
import ChatBoard from './components/chatBoard/ChatBoard';
import ChatButton from './components/chatButton/ChatButton';

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
    service
      .getConf()
      .then((data) => this.setState({ primaryColor: data.color }));
  }

  render() {
    return (
      <div className='App'>
        <div className='chat-container'>
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
