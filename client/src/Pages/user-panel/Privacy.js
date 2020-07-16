import React, { Fragment } from 'react'
import Navbar from '../components/Navigation'
import TopFixedBan from '../components/TopFixedBan'
import PrivacyCompo from '../components/Privacy'
import Footer from '../components/Footer'

const Privacy = () => (
    <Fragment>
        <Navbar title='Privacy' />
        <TopFixedBan title='Privacy Policy' />
        <PrivacyCompo />
        <Footer />
    </Fragment>
)
export default Privacy