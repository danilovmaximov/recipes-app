import {ChakraProvider} from '@chakra-ui/react';
import Head from 'next/head';

function MyApp({Component, pageProps}) {
    return (
        <ChakraProvider>
            <Head>
                <title>Recipes App</title>
            </Head>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;