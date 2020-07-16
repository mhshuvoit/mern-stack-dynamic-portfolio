import React, { Fragment } from 'react'
import Navbar from '../../components/user-panel/Navigation'
import TopFixedBan from '../../components/user-panel/TopFixedBan'
import ContactCompo from '../../components/user-panel/Contact'
import Footer from '../../components/user-panel/Footer'

const Contact = () => (
    <Fragment>
        <Navbar title='Contact' />
        <TopFixedBan title='Contact' />
        <ContactCompo />
        <Footer />
    </Fragment>
)

export default Contact