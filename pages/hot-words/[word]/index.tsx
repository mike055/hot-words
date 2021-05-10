import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import hotWordsConfiguration from '../../../src/configuration';

import { Layout, Main, Container, Wrapper } from '../../../src/components/layout';

export default function HotWordsMenu() {
    const router = useRouter();
    const { word } = router.query;

    if (!word) {
        return null;
    }

    const { words, title } = hotWordsConfiguration[word as string];

    return (
        <>
            <Head>
                <title>Hot Words - {title}</title>
                <meta name="description" content="Hot Words" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <Main>
                    <Wrapper>
                        <Container>
                            <h1>Hot Words - {title}</h1>
                        </Container>
                    </Wrapper>
                    <Wrapper>
                        <Container>
                            <ul>
                                {words.map((w) => {
                                    return <li key={w.word}>{w.word}</li>;
                                })}
                            </ul>
                        </Container>
                    </Wrapper>
                </Main>

                <footer></footer>
            </Layout>
        </>
    );
}
