import React from 'react';

//styles
import styles from './navigation.module.css';

//components
import NavigationButton from './navigationButton';

//components - styled-system
import Box from './styledSystem/button';

function Navigation({ selectedPage }) {
    return (
        <Box className={styles.box}>
            <NavigationButton text='Songs' selected={selectedPage === 'songs'} />
            <NavigationButton text='Playlist' selected={selectedPage === 'playlist'} />
        </Box>
    )
}

export default Navigation;