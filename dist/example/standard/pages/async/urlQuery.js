import React from 'react'
import Link from 'next/link'
import {withRouter} from 'next/router'
import {loadTvList} from '../../components/async/standard/db'

const DemoList = props => (<React.Fragment>
    <p>通过Url的query控制服务端加载</p>
    <Bar/>
    {props.shows.map(i => (<p key={i.show.id}>{i.show.name}</p>))}
</React.Fragment>);

DemoList.getInitialProps = async ({req, query}) => {
    const data = await loadTvList(query.q);
    return {shows: data}
};

const Bar = withRouter(props => {
    const {pathname} = props.router;
    return (<div>
        <button><Link href={`${pathname}?q=batman`}><a>batman</a></Link></button>
        <button><Link href={`${pathname}?q=child`}><a>child</a></Link></button>
        <button><Link href={`${pathname}?q=lahn`}><a>lahn</a></Link></button>
    </div>)})

export default DemoList