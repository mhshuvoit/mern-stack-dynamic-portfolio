import React, { Fragment } from 'react'
import Navbar from '../../components/user-panel/Navigation'
import TopFixedBan from '../../components/user-panel/TopFixedBan'
import PrivacyCompo from '../../components/user-panel/Privacy'
import Footer from '../../components/user-panel/Footer'

const Privacy = () => (
    <Fragment>
        <Navbar title='Privacy' />
        <TopFixedBan title='Privacy Policy' />
        <PrivacyCompo />
        <Footer />
    </Fragment>
)
export default Privacy