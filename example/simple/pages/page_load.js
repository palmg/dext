import React from 'react'
import Menus from '../component/menus'

const PageLoad = props => (<div>
    <Menus/>
    <h2>Page_Load</h2>
    <p>{props.data}</p>
</div>)

PageLoad.getInitialProps = ctx => {
    return new Promise((resolve, reject) => {
        resolve({data: "在页面加载的数据"});
    })
}

export default PageLoad

