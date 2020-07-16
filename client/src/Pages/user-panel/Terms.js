import React, { Fragment } from 'react'
import Navbar from '../../components/user-panel/Navigation'
import TopFixedBan from '../../components/user-panel/TopFixedBan'
import TermsCompo from '../../components/user-panel/Terms'
import Footer from '../../components/user-panel/Footer'

const Terms = () => (
    <Fragment>
        <Navbar title='Term' />
        <TopFixedBan title='Terms and Condition' />
        <TermsCompo />
        <Footer />
    </Fragment>
)
export default Terms