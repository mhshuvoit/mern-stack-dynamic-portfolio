import React, { Fragment } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Spinner from './Spinner'
import WentWrong from './Error'

class CoursesCompo extends React.Component {
    state = {
        coursedatas: [],
        spinner: true,
        error: false
    }

    componentDidMount() {
        axios.get('/course/get')
            .then(result => {
                if (result === null) {
                    this.setState({
                        error: true,
                        spinner: false
                    })
                }
                this.setState({
                    coursedatas: result.data.response,
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
            const courseview = this.state.coursedatas.reverse().slice(0, 4).map(coursedata => {
                return (
                    <Col lg={6} md={12} sm={12} className='mb-3'>
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <img className='courseImg' src={'/' + coursedata.image} alt='courses' />
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <h5>{coursedata.title}</h5>
                                <p>{coursedata.shortdes}</p>
                                <Link to={'/coursedetails/' + coursedata._id + '/' + coursedata.title}><Button variant="primary">Details</Button></Link>
                            </Col>
                        </Row>
                    </Col>
                )
            })
            return (
                <Fragment>
                    <Container>
                        <h4 className='allTitle'>OUR COURSES</h4>
                        <Row className='text-justify'>
                            {courseview}
                        </Row>
                    </Container>
                </Fragment>
            )
        }
    }
}

export default CoursesCompo
