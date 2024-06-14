import React from 'react';
import styles from './DynamicButton.module.css'; // Import CSS file for styling

const DynamicButton = ({ text }) => {
  return (
    <button className={styles.cstmBtn}>
      <span>{text}</span>
    </button>
  );
};

export default DynamicButton;