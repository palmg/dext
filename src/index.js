import App from './lib/application'
import Document from './lib/document'
import serverPreload from './lib/serverPreload'
import router from './lib/router'
import Link from './lib/route/link'
import Anchor from './lib/route/anchor'

export {App, Document, serverPreload, router, Link, Anchor}
const Index = {};
Index.App = App;
Index.Document = Document;
Index.serverPreload = serverPreload;
Index.router = router;
Index.Link = Link;
Index.Anchor = Anchor;

export default Index