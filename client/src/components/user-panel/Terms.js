import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios'
import ReactHtmlParser from 'react-html-parser'

class Terms extends React.Component {
    state = {
        terms: ''
    }

    componentDidMount() {
        axios.get('/info/get')
            .then(result => {
                this.setState({ terms: result.data.response[0]['terms'] })
            })
            .catch(error => {
                console.log(error)
            })
    }
    
    render() {
        return (
            <Fragment>
                <Container className='text-justify mt-5'>
                    <Row>
                        <Col lg={12}>
                            <ul>{ReactHtmlParser(this.state.terms)}</ul>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Terms
