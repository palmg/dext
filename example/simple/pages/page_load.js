import React from 'react'
import Menus from '../components/menus'

const PageLoad = props => {
    return (<div>
        <Menus/>
        <h2>Page_Load</h2>
        <p>{props.data}</p>
    </div>)
}

PageLoad.getInitialProps = async ctx => {
    const data = await new Promise((resolve, reject) => {
        resolve("在页面加载的数据");
    })
    console.log(data);
    return {data};
}

export default PageLoad

