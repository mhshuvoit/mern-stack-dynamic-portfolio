import React, { Fragment } from 'react'
import Spinner from '../asset/images/Spinner.svg'

const LoadingDiv = () => {
    return (
        <Fragment>
            <img style={{marginLeft:'515px', marginTop: '100px'}} src={Spinner} alt='loding' />
        </Fragment>
    )
}

export default LoadingDiv
