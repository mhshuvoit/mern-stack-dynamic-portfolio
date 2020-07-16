import React, { Fragment } from 'react'
import TopBanner from '../components/TopBanner'
import Services from '../components/Services'
import Navbar from '../components/Navigation'
import Analysis from '../components/Analysis'
import Summary from '../components/Summary'
import RecentProjects from '../components/RecentProjects'
import Courses from '../components/Courses'
import Video from '../components/Video'
import ClientReview from '../components/ClientReview'
import Footer from '../components/Footer'

function Home() {
    return (
        <Fragment>
            <Navbar title='Home' />
            <TopBanner />
            <Services />
            <Analysis />
            <Summary />
            <RecentProjects />
            <Courses />
            <Video />
            <ClientReview />
            <Footer />
        </Fragment>
    )
}

export default Home
