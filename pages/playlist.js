import React from 'react';

//components
import Layout from '../components/layout';
import Header from '../components/header';
import Footer from '../components/footer';
import Main from '../components/mainPlaylist.js';

function PlaylistPage() {
    return (
        <Layout>
            <Header selectedPage='playlist' />
            <Main />
            <Footer />
        </Layout>
    )
}

export default PlaylistPage