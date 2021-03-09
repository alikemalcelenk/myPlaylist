import React from 'react';
import cn from 'classnames';
import Link from 'next/link';

//styles
import styles from './logo.module.css';

//components - styled-system
import Box from './styledSystem/box';
import Text from './styledSystem/text';

//components - styled-system
import * as Icons from './icons';

function Logo({ className, ...props }) {
    return (
        <Link href="./" >
            <Box className={cn(styles.box, className)} {...props}>
                <Icons.Logo className={styles.icon} />
                <Text className={styles.span}>myPlaylist</Text>
            </Box>
        </Link>
    )
}

export default Logo;