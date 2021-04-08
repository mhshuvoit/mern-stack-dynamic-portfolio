import React, { Fragment } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Axios from 'axios'
import ReactHtmlParser from 'react-html-parser'
import Spinner from './Spinner'
import WentWrong from './Error'

class CourseDetails extends React.Component {
    constructor(props) {
        super()
        this.state = {
            id: props.id,
            img: '',
            title: '',
            shortdes: '',
            feature: '',
            spinner: true,
            error: false
        }
    }

    componentDidMount() {
        Axios.get('/course/' + this.state.id)
            .then(result => {
                if (result === null) {
                    this.setState({
                        error: true,
                        spinner: false
                    })
                }
                this.setState({
                    img: result.data.response['image'],
                    title: result.data.response['title'],
                    shortdes: result.data.response['shortdes'],
                    feature: result.data.response['feature'],
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
            return (
                <Fragment>
                    <Container fluid={true} className="topFxedBanner p-0" >
                        <div className="topFxedBannerOverlay">
                            <Container className="topFixedContent">
                                <Row>
                                    <Col lg={6} sm={12}>
                                        <h4>{this.state.title}</h4>
                                        <p>Total Lecture=100</p>
                                        <p>Total Student=100</p>
                                    </Col>
                                    <Col lg={6} sm={12}>
                                        <p>{this.state.shortdes}</p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Container>
                    <Container className='text-justify mt-5'>
                        <Row>
                            <Col lg={6} sm={12}>
                                <h4>{this.state.title}</h4>
                                <p>{this.state.shortdes}</p>
                                {ReactHtmlParser(this.state.feature)}
                                <Button className='primary'>Details</Button>
                            </Col>
                            <Col lg={6} sm={12}>
                                <img style={{ width: '100%' }} src={this.state.img} alt='courses' />
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            )
        }
    }
}

export default CourseDetails
