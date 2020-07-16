import React, { Fragment } from 'react'
import Navbar from '../../components/user-panel/Navigation'
import TopFixedBan from '../../components/user-panel/TopFixedBan'
import AllPorjects from '../../components/user-panel/AllPorjects'
import Footer from '../../components/user-panel/Footer'

const Portfolio = () => (
    <Fragment>
        <Navbar title='Portfolio' />
        <TopFixedBan title='All Projects' />
        <AllPorjects />
        <Footer />
    </Fragment>
)

export default Portfolio