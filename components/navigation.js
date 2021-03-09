import React from 'react';
import cn from 'classnames';

//styles
import styles from './navigation.module.css';

//components
import NavigationButton from './navigationButton';

//components - styled-system
import Box from './styledSystem/box';

function Navigation({ className, selectedPage }) {
    return (
        <Box className={cn(styles.box, className)}>
            <NavigationButton type='songs' selected={selectedPage === 'songs'} />
            <NavigationButton type='playlist' selected={selectedPage === 'playlist'} />
        </Box>
    )
}

export default Navigation;