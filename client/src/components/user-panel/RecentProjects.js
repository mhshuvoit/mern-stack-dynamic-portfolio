import React, { Fragment } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Spinner from './Spinner'
import WentWrong from './Error'

class RecentProjects extends React.Component {
    state = {
        projectdatas: [],
        spinner: true,
        error: false
    }

    componentDidMount() {
        axios.get('/project/get')
            .then(result => {
                if (result === null) {
                    this.setState({
                        error: true,
                        spinner: false
                    })
                }
                this.setState({
                    projectdatas: result.data.response,
                    spinner: false
                })
            })
            .catch(error => {
                this.setState({
                    error: true,
                    spinner: false
                })
            })
    }

    render() {
        if (this.state.spinner === true && this.state.error === false) {
            return <Spinner />
        } else if (this.state.error === true && this.state.spinner === false) {
            return <WentWrong />
        } else if (this.state.spinner === false && this.state.error === false) {
            const projectview = this.state.projectdatas.slice(0, 3).map(projectdata => {
                return (
                    <Col lg={4} md={6} sm={12}>
                        <Card>
                            <Card.Img variant="top" src={'/' + projectdata.image} />
                            <Card.Body>
                                <Card.Title>{projectdata.title}</Card.Title>
                                <Card.Text>{projectdata.shortdes}</Card.Text>
                                <Link to={'/projectdetails/' + projectdata._id + "/" + projectdata.title}><Button variant="primary">Details</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })
            return (
                <Fragment>
                    <Container>
                        <h4 className='allTitle'>RECENT PROJECTS</h4>
                        <Row>
                            {projectview}
                        </Row>
                    </Container>
                </Fragment>
            )
        }
    }
}

export default RecentProjects
