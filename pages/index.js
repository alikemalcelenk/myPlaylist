import React from 'react';

//components
import Layout from '../components/layout';
import Header from '../components/header';

//components - styled-system
import Box from '../components/styledSystem/box';

function HomePage() {
    return (
        <Layout>
            <Header />
            <Box>main</Box>
            <Box>footer</Box>
        </Layout>
    )
}

export default HomePage