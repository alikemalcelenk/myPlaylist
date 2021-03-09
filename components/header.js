import React from 'react';
import cn from 'classnames';

//styles
import styles from './header.module.css';

//components - styled-system
import Logo from './logo';
import Navigation from './navigation';

//components - styled-system
import Box from './styledSystem/Box';

function Layout({ className, children, ...props }) {
    return (
        <Box className={cn(styles.mainBox, className)} {...props}>
            <Logo />
            <Navigation selectedPage='songs' />
        </Box>
    )
}

export default Layout;