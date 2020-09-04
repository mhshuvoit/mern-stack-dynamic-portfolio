import React, { Fragment } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import axios from 'axios'

class Summary extends React.Component {
    state = {
        sumNumber: ''
    }

    componentDidMount() {
        axios.get('/etcs/get')
            .then(result => {
                this.setState({
                    sumNumber: result.data.response[0]['sumNumber']
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <Fragment>
                <Container fluid={true} className="sumBanner mt-5 p-0" >
                    <div className="sumBannerOverlay">
                        <Container>
                            <Row>
                                <Col lg={8} md={6} sm={12}>
                                    <Row className='coutSec'>
                                        <Col>
                                            <h1>
                                                <CountUp start={0} end={this.state.sumNumber}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h3>Total Projects</h3>
                                            <hr className='bg-white w-25' />
                                        </Col>
                                        <Col>
                                            <h1>
                                                <CountUp start={0} end={this.state.sumNumber}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h3>Total Projects</h3>
                                            <hr className='bg-white w-25' />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} md={6} sm={12}>
                                    <Card className='mt-5'>
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#0073E6' }} /> Requirement Gathering</Card.Text>
                                            <Card.Text><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#0073E6' }} /> Requirement Gathering</Card.Text>
                                            <Card.Text><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#0073E6' }} /> Requirement Gathering</Card.Text>
                                            <Card.Text><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#0073E6' }} /> Requirement Gathering</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        )
    }
}

export default Summary
