import React, { Fragment } from 'react'
import Navbar from '../components/Navigation'
import TopFixedBan from '../components/TopFixedBan'
import ContactCompo from '../components/Contact'
import Footer from '../components/Footer'

const Contact = () => (
    <Fragment>
        <Navbar title='Contact' />
        <TopFixedBan title='Contact' />
        <ContactCompo />
        <Footer />
    </Fragment>
)

export default Contact