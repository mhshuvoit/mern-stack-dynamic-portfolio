import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ApiUrl from './ApiEndPoint'
import axios from 'axios'
import Spinner from './Spinner'
import WentWrong from './Error'

class Services extends Component {
    state = {
        servicedatas: [],
        spinner: true,
        error: false
    }

    componentDidMount() {
        axios.get(ApiUrl.baseurl + '/service/get')
            .then(result => {
                if (result === null) {
                    this.setState({
                        error: true,
                        spinner: false
                    })
                }
                this.setState({
                    servicedatas: result.data.response,
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
            const service = this.state.servicedatas.map(servicedata => {
                return (
                    <Col lg={4} md={12} >
                        <div className='serviceCard'>
                            <img src={servicedata.img} alt='Web' />
                            <h4 className='mt-3 mb-3'>{servicedata.title} </h4>
                            <p>{servicedata.des}</p>
                        </div>
                    </Col>
                )
            })
            return (
                <Fragment>
                    <Container>
                        <h4 className='allTitle'>MY SERVICES</h4>
                        <Row>
                            {service}
                        </Row>
                    </Container>
                </Fragment>
            )
        }
    }
}

export default Services