import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { Player, BigPlayButton } from 'video-react'
import "video-react/dist/video-react.css"

class Video extends Component {
    state = {
        show: false
    }

    handleClose = () => this.setState({ show: false })

    handleShow = () => this.setState({ show: true })

    render() {
        return (
            <Fragment>
                <Container className='video'>
                    <h4 className='allTitle'>How I Do</h4>
                    <Row>
                        <Col>
                            <p>First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding. Testing is also going on with coding. Final testing take place after finishing coding part. After successful implementation i provide 6 month free bug fixing service for corresponding project.</p>
                            <p><FontAwesomeIcon onClick={this.handleShow} className='videoFont' icon={faPlayCircle} /></p>
                        </Col>
                    </Row>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Body>
                            <Player>
                                <source src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4' />
                                <BigPlayButton position='center' />
                            </Player>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.handleClose} variant="secondary">Close</Button>
                        </Modal.Footer>
                    </Modal>
                </Container>
            </Fragment>
        )
    }
}

export default Video