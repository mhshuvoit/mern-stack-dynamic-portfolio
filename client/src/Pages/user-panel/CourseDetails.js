import React, { Fragment } from 'react';
import Navbar from '../components/Navigation'
import CourseDetailsCompo from '../components/CourseDetails'
import Footer from '../components/Footer'

class CourseDetails extends React.Component {
    constructor({ match }) {
        super()
        this.state = {
            title: match.params.title,
            id: match.params.id
        }
    }
    render() {
        return (
            <Fragment>
                <Navbar title={this.state.title} />
                <CourseDetailsCompo id={this.state.id} />
                <Footer />
            </Fragment>
        )
    }
}

export default CourseDetails