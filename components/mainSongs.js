import React from 'react';
import cn from 'classnames';

//redux
import { connect } from 'react-redux';
import { addToPlaylist, getSongs } from '../redux/actions/index';

//styles
import styles from './mainSongs.module.css';

//components
import Song from './song';
import Spinner from "./spinner";

//components - styled-system
import Box from './styledSystem/box';
import Text from './styledSystem/text';


function SongsPageMain({ className, children, ...props }) {

    React.useEffect(() => {
        props.getSongs()
    }, [])

    return (
        <>
            {props.isLoading ? (
                <Spinner />
            ) : (
                <>
                    {props.isError ? (
                        <Text className={styles.errorText}>While fetching the songs, an error occurred. Please try again.</Text>
                    ) : (
                        <Box className={cn(styles.mainBox, className)} {...props}>
                            <Text className={styles.title} >Songs</Text>
                            {props.songs.map((song) => (
                                <Song
                                    className={styles.song}
                                    type='add'
                                    song={song}
                                    addToPlaylist={props.addToPlaylist}
                                />
                            ))}
                        </Box>
                    )}
                </>
            )
            }

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        songs: state.songs,
        isError: state.isError,
        isLoading: state.isLoading
    }
}

const mapActionsToProps = {
    addToPlaylist,
    getSongs
}

export default connect(mapStateToProps, mapActionsToProps)(SongsPageMain);