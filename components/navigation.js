import React from 'react';

//styles
import styles from './navigation.module.css';

//components
import NavigationButton from './navigationButton';

//components - styled-system
import Box from './styledSystem/button';

function Navigation() {
    return (
        <Box className={styles.layout}>
            <NavigationButton text='Songs' />
            <NavigationButton text='Playlist' />
        </Box>
    )
}

export default Navigation;