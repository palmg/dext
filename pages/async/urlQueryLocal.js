import React from 'react'
import TvDataController from '../../components/async/urlQueryLocal/tvDataController'
import LocalDataController from '../../components/async/urlQueryLocal/localDataController'

const DemoList = props => (<React.Fragment>
    <LocalDataController/>
    <hr/>
    <TvDataController/>
</React.Fragment>);

//DemoList.prototype[Symbol.toStringTag] = 'urlQueryLocal_DemoList';

class Demo extends React.Component {
    get [Symbol.toStringTag]() {
        return 'urlQueryLocal_DemoList';
    }

    render() {
        return (<React.Fragment>
            <TvDataController/>
            <LocalDataController/>
        </React.Fragment>);
    }
}

export default DemoList