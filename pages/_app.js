import React from 'react'
import {App, Head, Container} from '../src'
import Layout from '../components/app/layout'

export default class TextApp extends App {
    render() {
        const {Component, pageProps} = this.props;
        return (
            <Container>
                <Head>
                    <title>title</title>
                    <meta charSet='utf-8'/>
                    <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
                </Head>
                {super.render(<Layout>
                    <Component {...pageProps} />
                </Layout>)}
            </Container>
        );
    }
}