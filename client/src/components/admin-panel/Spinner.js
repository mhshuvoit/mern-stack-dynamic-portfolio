import React, { Fragment } from 'react'
import Spinner from '../../asset/admin-panel/images/Spinner.svg'

const LoadingDiv = () => {
    return (
        <Fragment>
            <img style={{ marginTop: '100px' }} src={Spinner} alt='loding' />
        </Fragment>
    )
}

export default LoadingDiv
