import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import hotWordsConfiguration, { gameConfiguration } from '../../../src/configuration';

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
                                {Object.keys(gameConfiguration).map((g) => {
                                    return (
                                        <li key={g}>
                                            <Link href="/hot-words/[word]/[game]" as={`/hot-words/${word}/${g}`}>
                                                <a>{gameConfiguration[g].title}</a>
                                            </Link>
                                        </li>
                                    );
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
