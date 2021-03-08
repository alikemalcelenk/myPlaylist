import React from 'react';

//styles
import styles from './albumCover.module.css';

//components - styled-system
import Box from './styledSystem/box';
import Image from './styledSystem/image';

function AlbumCover({ src, alt, ...props }) {
    return (
        <Box className={styles.box} {...props}>
            <Image className={styles.image} src={src} alt={alt} />
        </Box>
    )
}

export default AlbumCover;