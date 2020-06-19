/** @format */

import React, { Component } from 'react';
import styles from './ChatBoard.module.css';
import Historical from '../historical/historical';
import InitMessage from '../initMessage/InitMessage';
import Actioncard from '../actionCard/ActionCard';
import Chat from '../chat/Chat';

// const show = false;

class ChatBoard extends Component {
  constructor(props) {
    super();
    this.state = { show: false, sendMsj: false };
  }

  render() {
    return (
      <div className={styles.board}>
        <div
          className={styles.header}
          style={{ background: this.props.primaryColor }}
        ></div>
        <div className={styles.boardContent}>
          <InitMessage />
          <Historical />
          <Historical />
          <Actioncard />
        </div>
        {/* <Chat /> */}
        <div className={styles.footer}>
          <i className='fas fa-exclamation-circle'></i>
          <span>Powered by Tikket</span>
        </div>
      </div>
    );
  }
}

ChatBoard.defaultProps = {
  primaryColor: '#1f82ff',
};
export default ChatBoard;
