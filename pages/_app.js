import React from 'react'
import Head from 'next/head'
import Application from '../lib/application'
import {Container} from 'next/app'
import Framework from '../components/app/framework'

class App extends Application {
    render() {
        const {Component, pageProps} = this.props;
        return (
            <Container>
                <Head>
                    <title>title</title>
                    <meta charSet='utf-8'/>
                    <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
                </Head>
                {super.render(<Framework>
                    <Component {...pageProps} />
                </Framework>)}
            </Container>
        );
    }
}

export default App