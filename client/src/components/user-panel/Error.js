import React, { Fragment } from 'react'
import ErrorImg from '../asset/user-panel/images/error.svg'
import { Container } from 'react-bootstrap'

const Error = () => (
    <Fragment>
        <Container className='text-center'>
            <img className='errorImg' src={ErrorImg} alt='error' />
        </Container>
    </Fragment>
)

export default Error