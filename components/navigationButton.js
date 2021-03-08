import React from 'react';
import cn from 'classnames';

//styles
import styles from './navigationButton.module.css';

//components - styled-system
import Button from './styledSystem/button';
import Text from './styledSystem/text';

//components - styled-system
import * as Icons from './icons';

function NavigationButton({ text, selected, ...props }) {
    return (
        <Button className={styles.button} {...props}>
            {text == 'Playlist' && <Icons.Playlist className={styles.icon} />}
            <Text className={cn(styles.span, selected && styles.buttonSelectedSpan)}>{text}</Text>
        </Button>
    )
}

export default NavigationButton;