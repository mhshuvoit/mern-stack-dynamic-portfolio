import React, { Fragment } from 'react';
import Navbar from '../components/Navigation'
import TopFixedBan from '../components/TopFixedBan'
import AllCourses from '../components/AllCourses'
import Footer from '../components/Footer'

const Courses = () => (
    <Fragment>
        <Navbar title='Courses' />
        <TopFixedBan title='All Courses' />
        <AllCourses/>
        <Footer />
    </Fragment>
)

export default Courses