import React from 'react';
import styles from './buttons.module.css';

const Button = ({onClick, href, text, ref}) => {
  return (
   <a
     className={`${styles.button}`}
     href={href}
     onClick={onClick}
     ref={ref}
   >
     {text}
   </a>
  )
}

export default Button
