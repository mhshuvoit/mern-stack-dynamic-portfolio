import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from "react-bootstrap"

class TopFxedBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFxedBanner p-0" >
                    <div className="topFxedBannerOverlay">
                        <Container className="topFixedContent">
                            <Row>
                                <Col>
                                    <h4 className="topFixedTitle">{this.props.title}</h4>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        )
    }
}

export default TopFxedBanner