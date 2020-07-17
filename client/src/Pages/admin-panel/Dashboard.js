import React, { Fragment } from 'react'
import { Row, Col, Toast } from 'react-bootstrap'
import Navigation from '../../components/admin-panel/Navigation'

const Dashboard = () => {
    return (
        <Fragment>
            <Navigation>
                <Row className="mt-5">
                    <Col lg={3} sm={6}>
                        <Toast>
                            <Toast.Body>Courses 6</Toast.Body>
                        </Toast>
                    </Col>
                    <Col lg={3} sm={6}>
                        <Toast>
                            <Toast.Body>Project 6</Toast.Body>
                        </Toast>
                    </Col>
                    <Col lg={3} sm={6}>
                        <Toast>
                            <Toast.Body>Service 3</Toast.Body>
                        </Toast>
                    </Col>
                    <Col lg={3} sm={6}>
                        <Toast>
                            <Toast.Body>Contact 5</Toast.Body>
                        </Toast>
                    </Col>
                </Row>
            </Navigation>
        </Fragment>
    )
}

export default Dashboard