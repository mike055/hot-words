import React from 'react';
import type { AppProps } from 'next/app';
import StyleProvider from '../src/components/style-provider';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <StyleProvider />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
