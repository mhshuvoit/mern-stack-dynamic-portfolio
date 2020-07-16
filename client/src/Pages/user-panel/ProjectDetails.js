import React, { Fragment } from 'react'
import Navbar from '../../components/user-panel/Navigation'
import TopFixedBan from '../../components/user-panel/TopFixedBan'
import ProjectDetailsCompo from '../../components/user-panel/ProjectDetails'
import Footer from '../../components/user-panel/Footer'

class ProjectDetails extends React.Component {
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
                <Navbar title='Project Details' />
                <TopFixedBan title={this.state.title} />
                <ProjectDetailsCompo id={this.state.id} />
                <Footer />
            </Fragment>
        )
    }
}
export default ProjectDetails