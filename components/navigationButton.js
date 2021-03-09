import React from 'react';
import cn from 'classnames';
import Link from 'next/link';

//styles
import styles from './navigationButton.module.css';

//components - styled-system
import Box from './styledSystem/box';
import Text from './styledSystem/text';

//components - styled-system
import * as Icons from './icons';

function NavigationButton({ type, selected, ...props }) {
    return (
        <Link href={type === 'songs' ? "./songs" : type === 'playlist' && "./playlist"} >
            <Box className={styles.box} {...props}>
                {type == 'playlist' && <Icons.Playlist className={cn(styles.icon, selected && styles.buttonSelectedIcon)} />}
                <Text className={cn(styles.span, selected && styles.buttonSelectedSpan)}>
                    {type === 'songs' ? "Songs" : type === 'playlist' && "Playlist"}
                </Text>
            </Box>
        </Link>
    )
}

export default NavigationButton;