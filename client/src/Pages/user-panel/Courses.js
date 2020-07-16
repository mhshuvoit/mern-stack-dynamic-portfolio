import React, { Fragment } from 'react';
import Navbar from '../../components/user-panel/Navigation'
import TopFixedBan from '../../components/user-panel/TopFixedBan'
import AllCourses from '../../components/user-panel/AllCourses'
import Footer from '../../components/user-panel/Footer'

const Courses = () => (
    <Fragment>
        <Navbar title='Courses' />
        <TopFixedBan title='All Courses' />
        <AllCourses/>
        <Footer />
    </Fragment>
)

export default Courses