/** @format */

import React, { Component } from 'react';
import styles from './InitMessage.module.css';

class InitMessage extends Component {
  render() {
    return (
      <div className={styles.boardMessage}>
        <div className={styles.icon}>
          <i className='fas fa-exclamation-circle'></i>
        </div>
        <h4>Tittle</h4>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, optio.
        </span>
      </div>
    );
  }
}

export default InitMessage;
