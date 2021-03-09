import React from 'react';
import cn from 'classnames';

//styles
import styles from './mainPlaylist.module.css';

//components - styled-system
import Song from './song';

//components - styled-system
import Box from './styledSystem/box';

function SongsPageMain({ className, children, ...props }) {
    return (
        <Box className={cn(styles.mainBox, className)} {...props}>
            <Song
                className={styles.song}
                type='remove'
                src='https://artwollect-images.s3.eu-central-1.amazonaws.com/1604243025381'
                name='Instant Crush'
                artist='Daft Punk'
            />
            <Song
                className={styles.song}
                type='remove'
                src='https://artwollect-images.s3.eu-central-1.amazonaws.com/1604243025381'
                name='Instant Crush'
                artist='Daft Punk'
            />
            <Song
                className={styles.song}
                type='remove'
                src='https://artwollect-images.s3.eu-central-1.amazonaws.com/1604243025381'
                name='Instant Crush'
                artist='Daft Punk'
            />
            <Song
                className={styles.song}
                type='remove'
                src='https://artwollect-images.s3.eu-central-1.amazonaws.com/1604243025381'
                name='Instant Crush'
                artist='Daft Punk'
            />
            <Song
                className={styles.song}
                type='remove'
                src='https://artwollect-images.s3.eu-central-1.amazonaws.com/1604243025381'
                name='Instant Crush'
                artist='Daft Punk'
            />
            <Song
                className={styles.song}
                type='remove'
                src='https://artwollect-images.s3.eu-central-1.amazonaws.com/1604243025381'
                name='Instant Crush'
                artist='Daft Punk'
            />
            <Song
                className={styles.song}
                type='remove'
                src='https://artwollect-images.s3.eu-central-1.amazonaws.com/1604243025381'
                name='Instant Crush'
                artist='Daft Punk'
            />
            <Song
                className={styles.song}
                type='remove'
                src='https://artwollect-images.s3.eu-central-1.amazonaws.com/1604243025381'
                name='Instant Crush'
                artist='Daft Punk'
            />
            <Song
                className={styles.song}
                type='remove'
                src='https://artwollect-images.s3.eu-central-1.amazonaws.com/1604243025381'
                name='Instant Crush'
                artist='Daft Punk'
            />
            <Song
                className={styles.song}
                type='remove'
                src='https://artwollect-images.s3.eu-central-1.amazonaws.com/1604243025381'
                name='Instant Crush'
                artist='Daft Punk'
            />
        </Box>
    )
}

export default SongsPageMain;