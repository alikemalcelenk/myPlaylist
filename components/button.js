import React from 'react';

//styles
import styles from './button.module.css';

//components - styled-system
import Button from '../components/styledSystem/button';

function ButtonSb({ children }) {
    return <Button className={styles.button}>{children}</Button>
}

export default ButtonSb;