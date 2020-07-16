import React, { Fragment } from 'react'
import Navbar from '../components/Navigation'
import TopFixedBan from '../components/TopFixedBan'
import RefundCompo from '../components/Refund'
import Footer from '../components/Footer'

const Refund = () => (
    <Fragment>
        <Navbar title='Refund'/>
        <TopFixedBan title='Refund Policy' />
        <RefundCompo />
        <Footer/>
    </Fragment>
)
export default Refund