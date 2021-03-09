import React from 'react';
import cn from 'classnames';

//styles
import styles from './song.module.css';

//components
import AlbumCover from './albumCover';
import ActionButton from './actionButton';

//components - styled-system
import Box from './styledSystem/box';
import Text from './styledSystem/text';

function Song({ className, src, name, artist, type, ...props }) {
    return (
        <Box className={cn(styles.mainBox, className)} {...props}>
            <AlbumCover src={src} />
            <Box className={styles.textBox}>
                <Text className={styles.songNameText}>{name}</Text>
                <Text className={styles.songArtisttext}>
                    <Text className={styles.byText}>by </Text>
                    {artist}</Text>
            </Box>
            <ActionButton type={type} className={styles.button} />
        </Box>
    )
}

export default Song;