import React from 'react';
import cn from 'classnames';

//styles
import styles from './footer.module.css';

//components - styled-system
import Box from './styledSystem/Box';
import Text from './styledSystem/text';

function Footer({ className, children, ...props }) {
    return (
        <Box className={cn(styles.mainBox, className)} {...props}>
            <Text className={styles.text} >@2021 myPlaylist</Text>
        </Box>
    )
}

export default Footer;