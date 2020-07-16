import React, { Component, Fragment } from 'react'
import { Navbar, NavLink, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faHome, faIdCard, faTaxi, faProjectDiagram, faBook } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import '../asset/css/navigation.css'

class Navigation extends Component {
    constructor(props) {
        super()
        this.state = {
            sideNav: false,
            sideNavClass: "sidenavClose",
            mainDivOverlay: "main-overlay-close"
        }
    }

    showHideSideNav = () => {
        if (this.state.sideNav === false) {
            this.setState({
                sideNav: true,
                sideNavClass: "sidenavOpen",
                mainDivOverlay: "main-overlay-open"
            })
        } else {
            this.setState({
                sideNav: false,
                sideNavClass: "sidenavClose",
                mainDivOverlay: "main-overlay-close"
            })
        }
    }

    render() {
        return (
            <Fragment>
                <title>{this.props.title}</title>
                <Navbar expand="lg" className="fixed-top" variant="light" bg="light">
                    <Navbar.Brand onClick={this.showHideSideNav} href="#"><FontAwesomeIcon icon={faBars} /></Navbar.Brand>
                </Navbar>
                <div className={this.state.sideNavClass}>
                    <NavLink> <Link className="my-0 p-2 text-white" to="/"> <FontAwesomeIcon icon={faHome} /> Home</Link></NavLink>
                    <NavLink><Link className="my-0 p-2 text-white" to="/courses"> <FontAwesomeIcon icon={faBook} /> Courses</Link></NavLink>
                    <NavLink><Link className="my-0 p-2 text-white" to="/projects"> <FontAwesomeIcon icon={faProjectDiagram} /> Projects</Link></NavLink>
                    <NavLink><Link className="my-0 p-2 text-white" to="/services"> <FontAwesomeIcon icon={faTaxi} /> Services</Link></NavLink>
                    <NavLink><Link className="my-0 p-2 text-white" to="/contacts"> <FontAwesomeIcon icon={faIdCard} /> Contacts</Link></NavLink>
                </div>
                <div onClick={this.showHideSideNav} className={this.state.mainDivOverlay}>
                </div>
                <div className="customContainer">
                    <Row>
                        <Col>
                            {this.props.children}
                        </Col>
                    </Row>
                </div>
            </Fragment>
        )
    }
}

export default Navigation