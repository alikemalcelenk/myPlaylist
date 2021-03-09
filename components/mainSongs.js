import React from 'react';
import cn from 'classnames';
import { connect } from 'react-redux';

//styles
import styles from './mainSongs.module.css';

//components - styled-system
import Song from './song';

//components - styled-system
import Box from './styledSystem/box';


function SongsPageMain({ className, children, ...props }) {
    return (
        <Box className={cn(styles.mainBox, className)} {...props}>
            {props.songs.map((song) => (
                <Song
                    className={styles.song}
                    type='add'
                    src={song.cover}
                    name={song.name}
                    artist={song.artist}
                />
            ))}
        </Box>
    )
}

const mapStateToProps = (state) => {
    return {
        songs: state.songs
    }
}

export default connect(mapStateToProps)(SongsPageMain);