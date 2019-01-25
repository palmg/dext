import App from './lib/application'
import Head from 'next/head'
import {Container} from 'next/app'
import Document from './lib/document'
import router from './lib/router'
import Link from './lib/route/link'
import Anchor from './lib/route/anchor'

export {App, Head, Container, Document, router, Link, Anchor}
const Index = {};
Index.App = App;
Index.Head = Head;
Index.Container = Container;
Index.Document = Document;
Index.router = router;
Index.Link = Link;
Index.Anchor = Anchor;

export default Index