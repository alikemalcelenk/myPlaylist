import React from 'react';
import cn from 'classnames';

//styles
import styles from './actionButton.module.css';

//components - styled-system
import Button from './styledSystem/button';
import Text from './styledSystem/text';

function ActionButton({ className, type, children, ...props }) {
    return (
        <Button className={cn(styles.button, className, type === 'add' ? styles.addButton :
            type === 'remove' && styles.removeButton)} {...props}>
            <Text className={styles.span}>{type === 'add' ? 'Add to Playlist' : type === 'remove' && 'Remove'}</Text>
        </Button>
    )
}

export default ActionButton;