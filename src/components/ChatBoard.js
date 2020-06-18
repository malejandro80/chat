/** @format */

import React, { Component } from 'react';

// const show = false;

class ChatBoard extends Component {
  constructor(props) {
    super();
    this.state = { show: false };
  }
  render() {
    console.log(this.state.show);
    return (
      <div className={`board ${this.props.showBoard ? 'board' : 'hide'}`}>
        <div className='header' style={{ background: this.props.primaryColor }}>
          <div className='header-operators'>
            <img
              src='https://picsum.photos/id/237/100/100'
              alt=''
              className='operators'
            />
          </div>

          <div className='board-message'>
            <h4>Tittle</h4>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              optio.
            </span>
          </div>
        </div>
        <div className='chat'>
          <div className='historical-header'>
            <p>Conversaciones</p>
            <a href=''>Ver Todas</a>
          </div>
          <div className='historical-content'>
            <div className='historical-item'>
              <div className='left'>
                <img src='https://picsum.photos/id/237/100/100' alt='' />
                <span>
                  <p> Empresa</p>
                  <p>tu: mensaje</p>
                </span>
              </div>
              <span>date</span>
            </div>
            <div className='hr'></div>
            <div className='historical-item'>
              <div className='left'>
                <img src='https://picsum.photos/id/237/100/100' alt='' />
                <span>
                  <p> Empresa</p>
                  <p>tu: mensaje</p>
                </span>
              </div>
              <span>date</span>
            </div>
          </div>
          <button
            className='btn btn-msj'
            style={{ background: this.props.primaryColor }}
          >
            <i className='fas fa-chevron-circle-right msj-icon'></i>
            Enviar Mensaje
          </button>
        </div>
        <div className='footer'>
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
