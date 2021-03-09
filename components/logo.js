import React from 'react';
import cn from 'classnames';

//styles
import styles from './logo.module.css';

//components - styled-system
import Button from './styledSystem/button';
import Text from './styledSystem/text';

//components - styled-system
import * as Icons from './icons';

function Logo({ className, ...props }) {
    return (
        <Button className={cn(styles.button, className)} {...props}>
            <Icons.Logo className={styles.icon} />
            <Text className={styles.span}>myPlaylist</Text>
        </Button>
    )
}

export default Logo;