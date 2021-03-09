import React from 'react';
import cn from 'classnames';

//redux
import { connect } from 'react-redux';
import { removeFromPlaylist } from '../redux/actions/index';

//styles
import styles from './mainPlaylist.module.css';

//components - styled-system
import Song from './song';

//components - styled-system
import Box from './styledSystem/box';

function SongsPageMain({ className, children, ...props }) {
    return (
        <Box className={cn(styles.mainBox, className)} {...props}>
            {props.playlist.map((song) => (
                <Song
                    className={styles.song}
                    type='remove'
                    song={song}
                    removeFromPlaylist={props.removeFromPlaylist}
                />
            ))}
        </Box>
    )
}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        playlist: state.playlist
    }
}

const mapActionsToProps = {
    removeFromPlaylist
}

export default connect(mapStateToProps, mapActionsToProps)(SongsPageMain);