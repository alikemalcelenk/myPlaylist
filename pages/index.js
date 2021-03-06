import React from 'react';

//components
import Layout from '../components/layout';
import Header from '../components/header';
import Footer from '../components/footer';
import Main from '../components/mainIndex.js';

function HomePage() {
    return (
        <Layout>
            <Header />
            <Main />
            <Footer />
        </Layout>
    )
}

export default HomePage