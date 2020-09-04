import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios'

class Footer extends React.Component {
    state = {
        facebook: '',
        youtube: '',
        email: '',
        phone: '',
        footerCredit: ''
    }

    componentDidMount() {
        axios.get('/etcs/get')
            .then(result => {
                this.setState({
                    facebook: result.data.response[0]['facebook'],
                    youtube: result.data.response[0]['youtube'],
                    email: result.data.response[0]['email'],
                    phone: result.data.response[0]['phone'],
                    footerCredit: result.data.response[0]['footerCredit']
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <Fragment>
                <Container className='footer displayInline'>
                    <Row>
                        <Col lg={3} md={6} sm={6}>
                            <h5>Follow Me</h5>
                            <a target='_blank' rel="noopener noreferrer" href={this.state.facebook} > <FontAwesomeIcon icon={faFacebook} /> Facebook</a>
                            <a target='_blank' rel="noopener noreferrer" href={this.state.youtube} > <FontAwesomeIcon icon={faYoutube} /> YouTube</a>
                        </Col>
                        <Col lg={3} md={6} sm={6}>
                            <h5>Address</h5>
                            <p><FontAwesomeIcon icon={faEnvelope} /> Email: {this.state.email}</p>
                            <p><FontAwesomeIcon icon={faPhone} /> Phone Number: {this.state.phone}</p>
                        </Col>
                        <Col lg={3} md={6} sm={6}>
                            <h5>Information</h5>
                            <Link to='about'>About Me</Link>
                            <Link to='contact'>Contact Me</Link>
                        </Col>
                        <Col lg={3} md={6} sm={6}>
                            <h5>Legal</h5>
                            <Link to='refund'>Refund Policy</Link>
                            <Link to='term'>Terms And Condition</Link>
                            <Link to='privacy'>Privacy Policy</Link>
                        </Col>
                    </Row>
                </Container>
                <div className='footerCreadit'>
                    <p className='footerText'>{this.state.footerCredit}</p>
                </div>
            </Fragment>
        )
    }
}

export default Footer
