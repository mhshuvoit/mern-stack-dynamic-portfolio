import React, { Fragment } from 'react'
import Navbar from '../components/Navigation'
import TopFixedBan from '../components/TopFixedBan'
import AllPorjects from '../components/AllPorjects'
import Footer from '../components/Footer'

const Portfolio = () => (
    <Fragment>
        <Navbar title='Portfolio' />
        <TopFixedBan title='All Projects' />
        <AllPorjects />
        <Footer />
    </Fragment>
)

export default Portfolio