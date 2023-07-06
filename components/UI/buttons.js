import React from 'react';
import Link from 'next/link';
import styles from './buttons.module.css';

const Button = React.forwardRef(({ onClick, href, text }, ref) => {
  return (
    <a className={`${styles.button}`} href={href} onClick={onClick} ref={ref}>
      {text}
    </a>
  );
});

export default Button;
