/** @format */

import React, { Component } from 'react';
import styles from './Chat.module.css';

class Chat extends Component {
  render() {
    return (
      <div>
        <div className={styles.messagescontent}>
          <div className={styles.block}></div>
          <div className={styles.block}></div>
          <div className={styles.block}></div>
          <div className={styles.block}></div>
          <div className={styles.block}></div>
          <div className={styles.block}></div>
          <div className={styles.block}></div>
          <div className={styles.block}></div>
          <div className={styles.block}></div>
        </div>
        <div className={styles.chatInput}>
          <input type='text' />
          <a href=''>
            <i class='fa fa-paperclip' aria-hidden='true'></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Chat;
