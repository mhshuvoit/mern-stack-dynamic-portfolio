import React, { Fragment } from 'react'
import Navbar from '../../components/user-panel/Navigation'
import TopFixedBan from '../../components/user-panel/TopFixedBan'
import RefundCompo from '../../components/user-panel/Refund'
import Footer from '../../components/user-panel/Footer'

const Refund = () => (
    <Fragment>
        <Navbar title='Refund'/>
        <TopFixedBan title='Refund Policy' />
        <RefundCompo />
        <Footer/>
    </Fragment>
)
export default Refund