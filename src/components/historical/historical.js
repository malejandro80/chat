/** @format */

import React, { Component } from 'react';
import styles from './historical.module.css';

class Historical extends Component {
  render() {
    return (
      <>
        <div className={`cardContainer`}>
          <div className={styles.historicalHeader}>
            <p>Conversaciones</p>
            <a href=''>Ver Todas</a>
          </div>
          <div className={styles.historicalContent}>
            <div className={styles.historicalItem}>
              <div className={styles.left}>
                <img src='https://picsum.photos/id/237/100/100' alt='' />
                <span>
                  <p> Empresa</p>
                  <p>tu: mensaje</p>
                </span>
              </div>
              <span>date</span>
            </div>
            <div className={styles.hr}></div>
            <div className={styles.historicalItem}>
              <div className={styles.left}>
                <img src='https://picsum.photos/id/237/100/100' alt='' />
                <span>
                  <p> Empresa</p>
                  <p>tu: mensaje</p>
                </span>
              </div>
              <span>date</span>
            </div>
          </div>
          <button className={`btn ${styles.btnMsj}`}>
            <i className={`fas fa-chevron-circle-right ${styles.msjIcon}`}></i>
            Enviar Mensaje
          </button>
        </div>
      </>
    );
  }
}

export default Historical;
