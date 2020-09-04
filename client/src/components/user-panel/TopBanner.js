import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Button } from "react-bootstrap"
import axios from 'axios'
import Spinner from './Spinner'
import WentWrong from './Error'

class TopBanner extends Component {
    state = {
        topTitle: '',
        subTitle: '',
        spinnerClass: 'text-center',
        mainDiv: 'd-none',
        wentwrong: 'd-none'
    }

    componentDidMount() {
        axios.get('/etcs/get')
            .then(result => {
                if (result === null) {
                    this.setState({
                        spinnerClass: 'd-none',
                        mainDiv: 'd-none',
                        wentwrong: 'text-center'
                    })
                }
                this.setState({
                    topTitle: result.data.response[0]['topTitle'],
                    subTitle: result.data.response[0]['subTitle'],
                    spinnerClass: 'd-none',
                    mainDiv: 'text-center'
                })
            })
            .catch(error => {
                this.setState({
                    spinnerClass: 'd-none',
                    mainDiv: 'd-none',
                    wentwrong: 'text-center'
                })
            })
    }

    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topBanner p-0" >
                    <div className="topBannerOverlay">
                        <Container className="topContent">
                            <Row>
                                <Col className={this.state.wentwrong}>
                                    <WentWrong />
                                </Col>
                                <Col className={this.state.spinnerClass}>
                                    <Spinner />
                                </Col>
                                <Col className={this.state.mainDiv}>
                                    <h1 className="topTitle">{this.state.topTitle}</h1>
                                    <h4 className="topSubTitle">{this.state.subTitle}</h4>
                                    <Button variant="primary">More Info</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        )

    }
}

export default TopBanner