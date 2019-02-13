# 
## 启用

**创建项目：**

1. `npm i dossr`
1. `npx dossr`
1. `npm i`

现在已经完成React+Nextjs服务器搭建，它支持**任意浏览器**。

**运行项目：**
安装完成之后，使用下列命令运行开发环境。

1. `npm run dev`

**生产打包：**
1. `npm run build`
2. `npm start`

可以使用`pm2`等nodejs运行管理工具来替换`npm start`。

## 非页面组件异步加载数据
`Nextjs`默认只能用页面组件（./pages中的React组件）来异步加载数据，本框架提供了一种包装方法让任意组件都可以在客户端首次打开网站或页面切换时加载数据。

### 绑定页面标识
```javascript
import React from 'react'
import {signature} from 'dossr/initProps'
const Page = signature('yourPageSign', props => (<div>Page Components</div>));
export default Page
```
使用`signature`高阶组件对页面组件进行签名，字符串*yourPageSign*就可以用来标识这个组件。

### 组件跟随页面一起加载数据
每个组件都有会用于一个或多个页面，我们可以使用`pagePreload`对组件进行包装，包装之后返回的*promise*方法会在页面被加载时执行。
#### 使用签名绑定

使用签名来绑定。直观简洁。
```javascript
import React from 'react'
import {pagePreload} from 'dossr/initProps'
export default pagePreload('yourPageSign', async (requestContext) => {
    const load = await new Promise((resolve, reject) => {
        resolve('load data here。')
    });
    return {load} //注意命名，在获取数据时候要使用这个命名
})(props => (<p>{props.load}</p>))
```

#### 使用组件绑定
使用组件载入绑定，需要用到`require.ensure`。好处是不必考虑命名的内容，直接绑定到页面。
```javascript
import React from 'react'
import {pagePreload} from 'dossr/initProps'
export default pagePreload(cb=>{
       require.ensure([], require => {
           cb(require('../pages/yourPage'))//指向页面组件
       })
   }, async (requestContext) => {
    const load = await new Promise((resolve, reject) => {
        resolve('load data here。')
    });
    return {load} //注意命名，在获取数据时候要使用这个命名
})(props => (<p>{props.load}</p>))
```

#### 使用访问路径绑定
使用访问的URL将组件和页面进行绑定。
```javascript
import React from 'react'
import {pagePreload} from 'dossr/initProps'
export default pagePreload('/component_load', async (requestContext) => {
    const load = await new Promise((resolve, reject) => {
        resolve('load data here。')
    });
    return {load} //注意命名，在获取数据时候要使用这个命名
})(props => (<p>{props.load}</p>))
```

## 组件

### App
### Context
### Head 
### Container
### Document
### router
### Link
### Anchor