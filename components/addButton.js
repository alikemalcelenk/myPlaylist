import React from 'react';

//styles
import styles from './addButton.module.css';

//components - styled-system
import Button from './styledSystem/button';

//components - icons
import * as Icons from './icons';

function AddButton({ children, ...props }) {
    return (
        <Button className={styles.button} {...props}>
            <Icons.Music />
            <span className={styles.span}>{children}</span>
        </Button>
    )
}

export default AddButton;