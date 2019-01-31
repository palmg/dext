import React from 'react'
import {Link, router} from '../../../src'
import {loadTvListContext} from '../db/tvmaze'
import Loading from '../../app/layout/loading'
import {pagePreload} from '../../../src/initProps'
const TvDataController = props => {
    return (<React.Fragment>
        <p>通过Url的query控制服务端加载</p>
        <OptionAndData shows={props.shows}/>
    </React.Fragment>);
}

const OptionAndData = router(props => (<React.Fragment>
    <Bar route={props.route}/>
    {props.shows.map(i => {
        return (<p key={i.show.id}>{i.show.name}</p>)
    })}
    {props.route.isLocalRoute && (<Loading/>)}
</React.Fragment>))

const Bar = props => {
    const {pathname} = props.route;
    return (<div>
        <button><Link href={`${pathname}?q=batman`}><a>batman</a></Link></button>
        <button><Link href={`${pathname}?q=child`}><a>child</a></Link></button>
        <button><Link href={`${pathname}?q=lahn`}><a>lahn</a></Link></button>
    </div>)
}

export default pagePreload('/async/urlQueryLocal', loadTvListContext)(TvDataController)