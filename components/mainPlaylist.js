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
import Text from './styledSystem/text';

function SongsPageMain({ className, children, ...props }) {

    const [totalDurationMin, setTotalDurationMin] = React.useState(0);
    const [totalDurationSec, setTotalDurationSec] = React.useState(0);

    React.useEffect(() => {
        calculateTotalDuration();
    })

    async function calculateTotalDuration() {

        let totalSecond = 0;
        let minute, second;

        //Durationlar x:y şeklinde geliyor. x'i minute, y'yi ise second olarak alıyorum.
        await props.playlist.map((song) => {
            minute = song.duration.slice(0, song.duration.indexOf(':'));
            second = song.duration.slice(song.duration.indexOf(':') + 1, song.duration.length);
            totalSecond += (Number(minute) * 60) + Number(second);
            minute = 0; second = 0;
        })

        setTotalDurationMin(Math.floor(totalSecond / 60));
        setTotalDurationSec(totalSecond % 60);
    }


    return (
        <>
            {props.playlist.length > 0 ? (
                <Box className={cn(styles.mainBox, className)} {...props}>
                    <Text className={styles.title}> Playlist | Duration: {totalDurationMin}m {totalDurationSec}s </Text>
                    {props.playlist.map((song) => (
                        <Song
                            className={styles.song}
                            type='remove'
                            song={song}
                            removeFromPlaylist={props.removeFromPlaylist}
                        />
                    ))}
                </Box>
            ) : (
                <Text className={styles.emptyText}>Playlist is empty</Text>
            )}

        </>
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