import React, { Fragment } from 'react'
import Navbar from '../components/Navigation'
import TopFixedBan from '../components/TopFixedBan'
import TermsCompo from '../components/Terms'
import Footer from '../components/Footer'

const Terms = () => (
    <Fragment>
        <Navbar title='Term'/>
        <TopFixedBan title='Terms and Condition' />
        <TermsCompo />
        <Footer/>
    </Fragment>
)
export default Terms