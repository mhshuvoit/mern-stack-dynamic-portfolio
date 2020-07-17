import React, { Component, Fragment } from 'react'
import { Navbar, NavLink, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faHome, faIdCard, faTaxi, faProjectDiagram, faBook } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import '../../asset/admin-panel/css/navigation.css'

class Navigation extends Component {
    state = {
        sideNav: false,
        sideNavClass: "sidenavClose",
        mainDivOverlay: "main-overlay-close"
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
                    <Navbar.Brand style={{ cursor: 'pointer' }} onClick={this.showHideSideNav}><FontAwesomeIcon icon={faBars} /></Navbar.Brand>
                </Navbar>
                <div className={this.state.sideNavClass}>
                    <NavLink> <Link className="my-0 p-2 text-white" to="/admin"> <FontAwesomeIcon icon={faHome} /> Dashboard</Link></NavLink>
                    <NavLink><Link className="my-0 p-2 text-white" to="/admin/courses"> <FontAwesomeIcon icon={faBook} /> Courses</Link></NavLink>
                    <NavLink><Link className="my-0 p-2 text-white" to="/admin/projects"> <FontAwesomeIcon icon={faProjectDiagram} /> Projects</Link></NavLink>
                    <NavLink><Link className="my-0 p-2 text-white" to="/admin/services"> <FontAwesomeIcon icon={faTaxi} /> Services</Link></NavLink>
                    <NavLink><Link className="my-0 p-2 text-white" to="/admin/contacts"> <FontAwesomeIcon icon={faIdCard} /> Contacts</Link></NavLink>
                    <NavLink> <Link className="my-0 p-2 text-white" to="/admin/etc"> <FontAwesomeIcon icon={faHome} /> Etc</Link></NavLink>
                    <NavLink><Link className="my-0 p-2 text-white" to="/logout"> <FontAwesomeIcon icon={faIdCard} /> Logout</Link></NavLink>
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
