import React, { Fragment } from 'react'
import SpinnerSvg from '../asset/user-panel/images/Spinner.svg'
import { Container } from 'react-bootstrap'

const Spinner = () => (
    <Fragment>
        <Container className='text-center'>
            <img src={SpinnerSvg} alt='loding' />
        </Container>
    </Fragment>
)

export default Spinner