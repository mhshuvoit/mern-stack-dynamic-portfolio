import React, { Fragment } from 'react'
import Navbar from '../../components/user-panel/Navigation'
import TopFixedBan from '../../components/user-panel/TopFixedBan'
import ServicesCompo from '../../components/user-panel/Services'
import Contact from '../../components/user-panel/Contact'
import Footer from '../../components/user-panel/Footer'

const Services = () => (
    <Fragment>
        <Navbar title='Service' />
        <TopFixedBan title='All Service' />
        <ServicesCompo />
        <Contact />
        <Footer />
    </Fragment>
)

export default Services