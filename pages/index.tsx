import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { Layout, Main, Container, Wrapper } from '../src/components/layout';
import hotWordsConfiguration from '../src/configuration';
import styled from 'styled-components';

const CategoryList = styled.ul`
    margin: 0;
    padding: 0;
`;

const CategoryItem = styled.li<{
    colour: string;
}>`
    background-color: ${(props) => props.colour};
    list-style: none;
`;

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
                    <Wrapper>
                        <Container>
                            <h1>Hot Words</h1>
                        </Container>
                    </Wrapper>

                    <Wrapper>
                        <Container>
                            <CategoryList>
                                {Object.keys(hotWordsConfiguration).map((k) => {
                                    const hw = hotWordsConfiguration[k];
                                    return (
                                        <CategoryItem key={k} colour={hw.colour}>
                                            <Link href="/hot-words/[word]" as={`/hot-words/${k}`}>
                                                <a>{hw.title}</a>
                                            </Link>
                                        </CategoryItem>
                                    );
                                })}
                            </CategoryList>
                        </Container>
                    </Wrapper>
                </Main>

                <footer></footer>
            </Layout>
        </>
    );
}
