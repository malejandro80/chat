/** @format */

import React, { Component } from 'react';
import styles from './ChatButton.module.css';

class ChatButton extends Component {
  render() {
    const { handleButton } = this.props;
    return (
      <button
        className={`btn ${styles.btnChat}`}
        onClick={handleButton}
        style={{ background: this.props.primaryColor }}
      >
        <i class='fas fa-comments'></i>
      </button>
    );
  }
}

export default ChatButton;
