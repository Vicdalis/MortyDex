import { useRouter } from 'next/router'
import React from 'react';
import Layout from '../layout';
import ContentEpisodeDetail from './contentEpisodeDetail';
import HeaderDetail from '../characterDetails/headerDetail';

export default function EpisodeDetails(){

    const router = useRouter()
    const { id } = router.query


    return (
        <Layout>
            <HeaderDetail />
            <ContentEpisodeDetail id={id}/>
        </Layout>
    )
}