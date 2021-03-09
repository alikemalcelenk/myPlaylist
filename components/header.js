import React from 'react';
import cn from 'classnames';

//styles
import styles from './header.module.css';

//components - styled-system
import Logo from './logo';
import Navigation from './navigation';

//components - styled-system
import Box from './styledSystem/box';

function Layout({ className, selectedPage, children, ...props }) {
    return (
        <Box className={cn(styles.mainBox, className)} {...props}>
            <Logo className={styles.logo} />
            <Navigation className={styles.navigation} selectedPage={selectedPage} />
        </Box>
    )
}

export default Layout;