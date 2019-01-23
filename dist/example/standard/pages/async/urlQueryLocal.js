import React from 'react'
import {Link, router} from 'dossr'
import {loadTvList} from '../../components/async/standard/db'
import Loading from '../../components/app/layout/loading'

const DemoList = props => (<React.Fragment>
    <p>通过Url的query控制服务端加载</p>
    <OptionAndData shows={props.shows}/>
</React.Fragment>);

const OptionAndData = router(props => (<React.Fragment>
    <Bar route={props.route}/>
    {props.shows.map(i => (<p key={i.show.id}>{i.show.name}</p>))}
    {props.route.isLocalRoute && (<Loading/>)}
</React.Fragment>))


DemoList.getInitialProps = async ({req, query}) => {
    const data = await loadTvList(query.q);
    return {shows: data}
};

const Bar = props => {
    const {pathname} = props.route;
    return (<div>
        <button><Link href={`${pathname}?q=batman`}><a>batman</a></Link></button>
        <button><Link href={`${pathname}?q=child`}><a>child</a></Link></button>
        <button><Link href={`${pathname}?q=lahn`}><a>lahn</a></Link></button>
    </div>)
}

export default DemoList