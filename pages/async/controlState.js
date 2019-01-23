import React from 'react'
import {loadTvList} from '../../components/async/standard/db'

class DemoList extends React.Component {
    constructor(...props) {
        super(...props);
        this.state = {shows: this.props.shows};
        this.handleClick = this.handleClick.bind(this);
        this.setData = this.setData.bind(this);
    }

    /**
     * getInitialProps方法只能在pages组件中使用
     * @return {Promise<{shows: *}>}
     */
    static async getInitialProps({req, query}) {
        const isServer = !!req; //这是一个在管理案例中写的判断是否为服务器运行的方法
        const data = await loadTvList('batman');
        return {
            shows: data
        }
    }

    setData(shows) {
        this.setState({shows})
    }

    handleClick(e) {
        loadTvList('' + e.target.innerText.replace(/ /g, '')).then(this.setData);
    }

    render() {
        return (<React.Fragment>
            <p>通过组件的state控制服务端加载</p>
            <div>
                <button onClick={this.handleClick}>batman</button>
                <button onClick={this.handleClick}>child</button>
                <button onClick={this.handleClick}>lahn</button>
            </div>
            {this.state.shows.map(i => (<p key={i.show.id}>>{i.show.name}</p>))}
        </React.Fragment>)
    }
}

export default DemoList