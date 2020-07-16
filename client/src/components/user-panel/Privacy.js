import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ApiUrl from './ApiEndPoint'
import axios from 'axios'
import ReactHtmlParser from 'react-html-parser'

class Privacy extends React.Component {
    state = {
        privacy: ''
    }

    componentDidMount() {
        axios.get(ApiUrl.baseurl + '/info/get')
            .then(result => {
                this.setState({ privacy: result.data.response[0]['privacy'] })
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
                            <ul>{ReactHtmlParser(this.state.privacy)}</ul>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Privacy
