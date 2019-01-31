import React from 'react'
import {Anchor} from 'dossr'
import {withRouter} from 'next/router'
import {loadTvList} from '../../components/async/db/tvmaze'
const DemoList = props => {
    return (<React.Fragment>
        <p>通过Url的query控制服务端加载</p>
        <Bar/>
        {props.shows.map(i => (<p key={i.show.id}>{i.show.name}</p>))}
    </React.Fragment>);
};

DemoList.getInitialProps = async ({req, query}) => {
    return await loadTvList(query.q);
};

const Bar = withRouter(props => {
    const {pathname} = props.router;
    return (<div>
        <button><Anchor href={`${pathname}?q=batman`}><a>batman</a></Anchor></button>
        <button><Anchor href={`${pathname}?q=child`}><a>child</a></Anchor></button>
        <button><Anchor href={`${pathname}?q=lahn`}><a>lahn</a></Anchor></button>
    </div>)});

export default DemoList