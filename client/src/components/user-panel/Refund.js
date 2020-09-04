import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios'
import ReactHtmlParser from 'react-html-parser'

class Refund extends React.Component {
    state = {
        refund: ''
    }

    componentDidMount() {
        axios.get('/info/get')
            .then(result => {
                this.setState({ refund: result.data.response[0]['refund'] })
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
                            <ul>{ReactHtmlParser(this.state.refund)}</ul>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Refund
