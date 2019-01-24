import React from 'react'
import {serverPreload} from 'dossr'
const Data = 'Async Load information';
const AsyncLoad = props =>(<div>{props.async}</div>)

export default serverPreload('async', new Promise((resolve)=>{
    console.log('async');
    resolve(Data)
}))(AsyncLoad)