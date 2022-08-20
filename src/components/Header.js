import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';
import auth from '../firebaseinit';
import * as Types from "../store/actions/types"
import store from "../store/index"
import { connect } from 'react-redux';
import { logOut } from '../store/actions/actionsCreator';
import jwt_decode from "jwt-decode"
import setAuthToken from '../utilities/setAuthToken';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Header.css"
import { useLocation } from 'react-router-dom';

const token = localStorage.getItem("auth_token")
if (token) {
    let decode = jwt_decode(token)
    console.log(decode)
    setAuthToken(token)
    store.dispatch({
        type: Types.SET_USER,
        payload: {
            user: decode
        }
    })
}

const style = {
    fontSize: "23px",
}

const Header = (props) => {
    const location = useLocation()
    const [scrolled, setScrolled] = useState(false)

    useEffect(_ => {
        const handleScroll = _ => {
            if (window.scrollY > 3) {
                setScrolled(true)

            } else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return _ => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    const authenticatedUser = useSelector(state => state.rootReducer.auth.isAuthenticated, shallowEqual)

    const handleLogout = () => {
        props.logOut()
        signOut(auth)
    }

    return (
        <div className={`header ${scrolled ? "header_border" : "header_default"}`}>
            <Navbar style={{ zIndex: "199" }} expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/home" className={`logo d-flex justify-content-center align-items-center fw-bold ${location.pathname !== "/" && location.pathname !== "/home" && !scrolled ? "text-dark" : " text-white"}`} style={style}>
                        <img src="https://i.ibb.co/8j53qPn/bank-logo-1-removebg-preview.png" width="50px" alt="" />
                        ArBank
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link className={`${location.pathname !== "/" && location.pathname !== "/home" && !scrolled ? "text-dark" : " text-white"}`} as={Link} to="/home">Home</Nav.Link>

                            <Nav.Link className={`${location.pathname !== "/" && location.pathname !== "/home" && !scrolled ? "text-dark" : " text-white"}`} as={Link} to="/services">Services</Nav.Link>

                            <Nav.Link className={`${location.pathname !== "/" && location.pathname !== "/home" && !scrolled ? "text-dark" : " text-white"}`} as={Link} to="/apply">Contact</Nav.Link>

                            <Nav.Link className={`${location.pathname !== "/" && location.pathname !== "/home" && !scrolled ? "text-dark" : " text-white"}`} as={Link} to="/dashboard">Dashboard</Nav.Link>
                            <Nav.Link> {
                                authenticatedUser ? <button onClick={handleLogout} className="btn btn-danger">Log out</button>
                                    :
                                    <Link to="/login"><button className="btn btn-success">Log in</button></Link>
                            }</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default connect(null, { logOut })(Header);