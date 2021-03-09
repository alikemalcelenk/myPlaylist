import React from 'react';
import cn from 'classnames';

//styles
import styles from './navigation.module.css';

//components
import NavigationButton from './navigationButton';

//components - styled-system
import Box from './styledSystem/button';

function Navigation({ className, selectedPage }) {
    return (
        <Box className={cn(styles.box, className)}>
            <NavigationButton text='Songs' selected={selectedPage === 'songs'} />
            <NavigationButton text='Playlist' selected={selectedPage === 'playlist'} />
        </Box>
    )
}

export default Navigation;