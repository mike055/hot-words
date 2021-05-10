import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import hotWordsConfiguration, { gameConfiguration } from '../../../../src/configuration';

import { Layout, Main, Container, Wrapper } from '../../../../src/components/layout';

export default function HotWordsMenu() {
    const router = useRouter();
    const { word, game } = router.query;

    if (!word || !game) {
        return null;
    }

    const hotWord = hotWordsConfiguration[word as string];
    const gameDetails = gameConfiguration[game as string];

    return (
        <>
            <Head>
                <title>
                    Hot Words - {hotWord.title} - {gameDetails.title}
                </title>
                <meta name="description" content="Hot Words" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <Main>
                    <Wrapper>
                        <Container>
                            <h1>
                                Hot Words - {hotWord.title} - {gameDetails.title}
                            </h1>
                        </Container>
                    </Wrapper>
                    <Wrapper>
                        <Container>
                            <ul>
                                {hotWord.words.map((w) => {
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
