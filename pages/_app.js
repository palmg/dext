import React from 'react'
import {App, Head, Container} from '../src'
import Layout from '../components/app/layout'
import {Provider} from '../src/context'

export default class TextApp extends App {
    render() {
        const {Component, pageProps, appProps, compProps} = this.props;
        return (
            <Container>
                <Head>
                    <title>title</title>
                    <meta charSet='utf-8'/>
                    <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
                </Head>
                <Provider value={{appProps, compProps}}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </Provider>
            </Container>
        );
    }
}