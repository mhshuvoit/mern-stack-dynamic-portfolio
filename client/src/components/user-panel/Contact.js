import React, { Fragment } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

class Contact extends React.Component {
    state = {
        emails: '',
        phone: '',
        name: '',
        email: '',
        msg: ''
    }

    componentDidMount() {
        axios.get('/etcs/get')
            .then(result => {
                this.setState({
                    emails: result.data.response[0]['email'],
                    phone: result.data.response[0]['phone']
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        let contactjson = {
            name: this.state.name,
            email: this.state.email,
            msg: this.state.msg
        }
        axios.post('/contact/add', contactjson)
            .then(response => {
                console.log(response.data)
            })
            .catch(err => {
                console.log(err)
            })
        event.target.reset()
        this.setState({
            name: '',
            email: '',
            msg: ''
        })

    }

    render() {
        return (
            <Fragment>
                <Container className='text-justify mt-5'>
                    <Row>
                        <Col lg={6} sm={12}>
                            <h4>Quick Contact</h4>
                            <Form onSubmit={this.onSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control name="name"
                                        placeholder="Enter Name"
                                        value={this.state.name}
                                        onChange={this.onChange} />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control name="email"
                                        placeholder="Enter email"
                                        value={this.state.email}
                                        onChange={this.onChange} />
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea"
                                            name="msg"
                                            rows="3"
                                            value={this.state.msg}
                                            onChange={this.onChange} />
                                    </Form.Group>
                                </Form.Group>
                                <Button type='submit' variant="primary">Submit</Button>
                            </Form>
                        </Col>
                        <Col lg={6} sm={12}>
                            <h4>Discuss Now</h4>
                            <h5>Address</h5>
                            <p><FontAwesomeIcon icon={faEnvelope} /> Email: {this.state.emails}</p>
                            <p><FontAwesomeIcon icon={faPhone} /> Phone Number: {this.state.phone}</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Contact;
