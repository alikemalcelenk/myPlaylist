import React from 'react';

//components
import Layout from '../components/layout';
import Header from '../components/header';
import Footer from '../components/footer';
import Main from '../components/mainSongs.js';

function SongsPage() {
    return (
        <Layout>
            <Header selectedPage='songs' />
            <Main />
            <Footer />
        </Layout>
    )
}

export default SongsPage