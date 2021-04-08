import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from 'recharts'
import axios from 'axios'
import ReactHtmlParser from 'react-html-parser'
import Spinner from './Spinner'
import WentWrong from './Error'

class Analysis extends React.Component {
    state = {
        techdata: [],
        techdes: '',
        spinner: true,
        error: false
    }

    componentDidMount() {
        axios.get('/chart/get')
            .then(result => {
                if (result === null) {
                    this.setState({
                        error: true,
                        spinner: false
                    })
                }
                this.setState({
                    techdata: result.data.response,
                    techdes: result.data.response[0]['techDes'],
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
            let blue = 'rgba(0, 115, 230, 0.8)'
            return (
                <Fragment>
                    <Container>
                        <h4 className='allTitle'>Technology Used</h4>
                        <Row>
                            <Col style={{ width: 100, height: 300 }} lg={6} sm={12}>
                                <ResponsiveContainer>
                                    <BarChart data={this.state.techdata}>
                                        <XAxis dataKey='technology' />
                                        <Tooltip />
                                        <Bar dataKey='project' fill={blue} >
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </Col>
                            <Col lg={6} sm={12} className='text-justify'>
                                {ReactHtmlParser(this.state.techdes)}
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            )
        }
    }
}

export default Analysis
