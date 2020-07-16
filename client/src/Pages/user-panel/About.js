import React, { Fragment } from 'react'
import Navbar from '../user-panel/../Pages/components/Navigation'
import TopFixedBan from '../components/TopFixedBan'
import AboutCompo from '../components/About'
import Footer from '../components/Footer'

const About = () => (
    <Fragment>
        <Navbar title='About'/>
        <TopFixedBan title='About Me' />
        <AboutCompo />
        <Footer/>
    </Fragment>
)
export default About