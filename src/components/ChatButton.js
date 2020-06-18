/** @format */

import React, { Component } from 'react';

class ChatButton extends Component {
  render() {
    const { handleButton } = this.props;
    return (
      <button
        className='btn'
        onClick={handleButton}
        style={{ background: this.props.primaryColor }}
      >
        Call to Action
      </button>
    );
  }
}

export default ChatButton;
