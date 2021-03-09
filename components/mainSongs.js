import React from 'react';
import cn from 'classnames';

//redux
import { connect } from 'react-redux';
import { addToPlaylist } from '../redux/actions/index';

//styles
import styles from './mainSongs.module.css';

//components - styled-system
import Song from './song';

//components - styled-system
import Box from './styledSystem/box';


function SongsPageMain({ className, children, ...props }) {
    console.log(props)
    return (
        <Box className={cn(styles.mainBox, className)} {...props}>
            {props.songs.map((song) => (
                <Song
                    className={styles.song}
                    type='add'
                    song={song}
                    addToPlaylist={props.addToPlaylist}
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

const mapActionsToProps = {
    addToPlaylist
}

export default connect(mapStateToProps, mapActionsToProps)(SongsPageMain);