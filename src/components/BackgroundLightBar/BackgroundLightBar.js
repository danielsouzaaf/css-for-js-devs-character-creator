import React from 'react';

import styles from './BackgroundLightBar.module.css';

const BackgroundLightBar = ({
  children,
  className = '',
  ...delegated
}) => {
  return (
    <div
      className={`${styles.backgroundLightBar} ${className}`}
      {...delegated}
    />
  );
};

export default BackgroundLightBar;
