import React from 'react';
import Head from 'next/head';
import { Layout, Main, Container } from '../src/components/layout';

export default function Home() {
    return (
        <>
            <Head>
                <title>Hot Words</title>
                <meta name="description" content="Hot Words" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <Main>
                    <Container>
                        <h1>Hot Words</h1>
                    </Container>
                </Main>

                <footer></footer>
            </Layout>
        </>
    );
}
