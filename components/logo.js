import React from 'react';

//styles
import styles from './logo.module.css';

//components - styled-system
import Button from './styledSystem/button';
import Text from './styledSystem/text';

//components - styled-system
import * as Icons from './icons';

function Logo({ ...props }) {
    return (
        <Button className={styles.button} {...props}>
            <Icons.Logo className={styles.icon} />
            <Text className={styles.span}>myPlaylist</Text>
        </Button>
    )
}

export default Logo;