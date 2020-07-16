import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ApiUrl from './ApiEndPoint'
import axios from 'axios'
import ReactHtmlParser from 'react-html-parser'

class About extends React.Component {
    state = {
        about: ''
    }

    componentDidMount() {
        axios.get(ApiUrl.baseurl + '/info/get')
            .then(result => {
                this.setState({ about: result.data.response[0]['about'] })
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
                        <Col>
                        {ReactHtmlParser(this.state.about)}
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default About
