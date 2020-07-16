import React, { Fragment } from 'react'
import Navbar from '../components/Navigation'
import TopFixedBan from '../components/TopFixedBan'
import ServicesCompo from '../components/Services'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Services = () => (
    <Fragment>
        <Navbar title='Service' />
        <TopFixedBan title='All Service' />
        <ServicesCompo />
        <Contact/>
        <Footer />
    </Fragment>
)

export default Services