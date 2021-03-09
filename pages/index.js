import React from 'react';

//components
import Layout from '../components/layout';
import Header from '../components/header';
import Footer from '../components/footer';

//components - styled-system
import Box from '../components/styledSystem/box';

function HomePage() {
    return (
        <Layout>
            <Header />
            <Box>main</Box>
            <Footer />
        </Layout>
    )
}

export default HomePage