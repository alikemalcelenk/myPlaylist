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

function Song({ className, song, type, addToPlaylist, removeFromPlaylist, ...props }) {
    return (
        <Box className={cn(styles.mainBox, className)} {...props}>
            <AlbumCover src={song.cover} />
            <Box className={styles.textBox}>
                <Text className={styles.songNameText}>{song.name}</Text>
                <Text className={styles.songArtisttext}>
                    <Text className={styles.byText}>by </Text>
                    {song.artist}
                </Text>
            </Box>
            <ActionButton
                type={type} className={styles.button}
                onClick={() => type === 'add' ? addToPlaylist(song) : type === 'remove' && removeFromPlaylist(song)}
            />
        </Box>
    )
}

export default Song;