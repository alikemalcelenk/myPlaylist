import React from 'react';

//styles
import styles from './song.module.css';

//components
import AlbumCover from './albumCover';
import ActionButton from './actionButton';

//components - styled-system
import Box from './styledSystem/box';
import Text from './styledSystem/text';

function Song({ src = 'https://artwollect-images.s3.eu-central-1.amazonaws.com/1604243025381', type, ...props }) {
    return (
        <Box className={styles.mainBox} {...props}>
            <AlbumCover src={src} />
            <Box className={styles.textBox}>
                <Text className={styles.songNameText}>Instant Crush</Text>
                <Text className={styles.songArtisttext}>
                    <Text className={styles.byText}>by </Text>
                    Daft Punk</Text>
            </Box>
            <ActionButton type='add' className={styles.button} />
        </Box>
    )
}

export default Song;