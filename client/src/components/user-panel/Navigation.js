import React, { Fragment } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import whiteLogo from '../../asset/user-panel/images/logo/whitelogo.svg'
import blueLogo from '../../asset/user-panel/images/logo/bluelogo.svg'
import '../../asset/user-panel/css/custom.css'
import '../../asset/user-panel/css/responsive.css'

class Navigation extends React.Component {
    state = {
        navBarTitle: 'navTitle',
        navBarLogo: [whiteLogo],
        variant: 'dark',
        navBackground: 'navBackground',
        navItem: 'navItem'
    }

    onScroll = () => {
        if (window.scrollY > 100) {
            this.setState({
                navBarTitle: 'navTitleScroll',
                navBarLogo: [blueLogo],
                navBackground: 'navBackgroundScroll',
                navItem: 'navItemScroll',
                variant: 'light'
            })
        } else if (window.scrollY < 100) {
            this.setState({
                navBarTitle: 'navTitle',
                navBarLogo: [whiteLogo],
                navBackground: 'navBackground',
                navItem: 'navItem',
                variant: 'dark'
            })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll)
    }

    render() {
        return (
            <Fragment>
                <title>{this.props.title}</title>
                <Navbar className={this.state.navBackground} fixed='top' collapseOnSelect expand="lg" variant={this.state.variant}>
                    <Navbar.Brand><NavLink className={this.state.navBarTitle} to='/'><img src={this.state.navBarLogo} alt='logo' />MAHAMUDUL HASAN</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto" >
                            <Nav.Link><NavLink exact activeStyle={{ color: '#00a8ee' }} to='/' className={this.state.navItem}>Home</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{ color: '#00a8ee' }} to='/services' className={this.state.navItem}>Services</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{ color: '#00a8ee' }} to='/courses' className={this.state.navItem}>Courses</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{ color: '#00a8ee' }} to='/portfolio' className={this.state.navItem}>Portfolio</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{ color: '#00a8ee' }} to='/contact' className={this.state.navItem}>Contact</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{ color: '#00a8ee' }} to='/about' className={this.state.navItem}>About</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        )
    }
}

export default Navigation
