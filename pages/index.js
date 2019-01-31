import React from 'react'
import HomeContent from '../components/home/homeContent'
import {signature} from '../src/initProps'

const Index = signature('index',props =>(<div><h1>首页</h1><HomeContent/></div>));

export default Index