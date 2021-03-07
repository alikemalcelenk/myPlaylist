import React from 'react';

import styles from './button.module.css';

function Button({ children }) {
    return <button className={styles.button}>{children}</button>
}

export default Button;