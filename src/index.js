import App from './lib/application'
import Head from 'next/head'
import {Container} from 'next/app'
import Document from './lib/document'
import serverPreload from './lib/serverPreload'
import router from './lib/router'
import Link from './lib/route/link'
import Anchor from './lib/route/anchor'

export {App, Head, Container, Document, serverPreload, router, Link, Anchor}
const Index = {};
Index.App = App;
Index.Head = Head;
Index.Container = Container;
Index.Document = Document;
Index.serverPreload = serverPreload;
Index.router = router;
Index.Link = Link;
Index.Anchor = Anchor;

export default Index