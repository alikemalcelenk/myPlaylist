import React from 'react';

//styles
import styles from './actionButton.module.css';

//components - styled-system
import Button from './styledSystem/button';
import Text from './styledSystem/text';

function ActionButton({ children, ...props }) {
    return (
        <Button className={styles.button} {...props}>
            <Text className={styles.span}>{children}</Text>
        </Button>
    )
}

export default ActionButton;