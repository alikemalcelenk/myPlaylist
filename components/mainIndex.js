import React from 'react';
import cn from 'classnames';

//styles
import styles from './mainIndex.module.css';

//components - styled-system
import Box from './styledSystem/box';
import Text from './styledSystem/text';

function SongsPageMain({ className, children, ...props }) {
    return (
        <Box className={cn(styles.mainBox, className)} {...props}>
            <Text>Welcome</Text>
        </Box>
    )
}

export default SongsPageMain;