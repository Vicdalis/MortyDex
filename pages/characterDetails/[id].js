import { useRouter } from 'next/router'
import React from 'react';
import Layout from '../layout';
import HeaderDetail from './headerDetail';
import ContentDetail from './contentDetail';

export default function CharacterDetails(){

    const router = useRouter()
    const { id } = router.query

    return (
        <Layout>
            <HeaderDetail />
            <ContentDetail id={id} />
        </Layout>
    )
}