import React, { Fragment } from 'react'
import TopBanner from '../../components/user-panel/TopBanner'
import Services from '../../components/user-panel/Services'
import Navbar from '../../components/user-panel/Navigation'
import Analysis from '../../components/user-panel/Analysis'
import Summary from '../../components/user-panel/Summary'
import RecentProjects from '../../components/user-panel/RecentProjects'
import Courses from '../../components/user-panel/Courses'
import Video from '../../components/user-panel/Video'
import ClientReview from '../../components/user-panel/ClientReview'
import Footer from '../../components/user-panel/Footer'

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
