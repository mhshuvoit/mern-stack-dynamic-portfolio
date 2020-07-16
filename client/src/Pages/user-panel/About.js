import React, { Fragment } from 'react'
import Navbar from '../../components/user-panel/Navigation'
import TopFixedBan from '../../components/user-panel/TopFixedBan'
import AboutCompo from '../../components/user-panel/About'
import Footer from '../../components/user-panel/Footer'

const About = () => (
    <Fragment>
        <Navbar title='About'/>
        <TopFixedBan title='About Me' />
        <AboutCompo />
        <Footer/>
    </Fragment>
)
export default About