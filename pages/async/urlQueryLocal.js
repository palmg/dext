import React from 'react'
import DataController from '../../components/async/urlQueryLocal/dataController'
const DemoList = props => (<React.Fragment>
    <DataController />
</React.Fragment>);

// DemoList.getInitialProps = async ({req, query}) => {
//     console.log(query);
//     return {shows: ''}
// };

export default DemoList