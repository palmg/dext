import React from 'react'
import {Link} from 'dossr'
import AsyncLoad from '../component/asyncLoad'
export default props =>(<div>
    <div>
        <span><Link href="/">home</Link></span>|
        <span><Link href="/content1">content1</Link></span>|
        <span><Link href="/content2">content2</Link></span>
    </div>
    <div>
        <AsyncLoad />
    </div>
</div>)