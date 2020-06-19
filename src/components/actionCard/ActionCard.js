/** @format */

import React, { Component } from 'react';
import styles from './ActionCard.module.css';

class ActionCard extends Component {
  render() {
    return (
      <div className={`cardContainer ${styles.lastItem}`}>
        <h4>Titttle</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          libero!
        </p>
        <button className={`btn ${styles.ctaButton}`}>Call To Action</button>
      </div>
    );
  }
}

export default ActionCard;
