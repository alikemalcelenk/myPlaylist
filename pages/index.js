import React from 'react';

//components
import Layout from '../components/layout';

//components - styled-system
import Box from '../components/styledSystem/box';

function HomePage() {
    return (
        <Layout>
            <Box>header</Box>
            <Box>main</Box>
            <Box>footer</Box>
        </Layout>
    )
}

export default HomePage