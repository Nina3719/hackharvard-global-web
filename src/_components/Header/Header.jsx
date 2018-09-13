import React from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Image, Navbar, Nav , NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

import { store } from '../../_helpers/store';
import './styles.css'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/* <Navbar fixedTop collapseOnSelect> */}
                <Navbar collapseOnSelect>
                    <a href="/">
                        <Navbar.Header>
                                    <img className ="logoHeader"src={require("./assets/logoWhite.png")}/>
                        </Navbar.Header>
                    </a>

                    <Nav>
                      <NavItem eventKey={1} href="/apply">
                        <h2>APPLY</h2>
                      </NavItem>

                      <NavItem eventKey={2} href="/#schedule">
                        <h2>SCHEDULE</h2>
                      </NavItem>

                      <NavItem eventKey={3} href="/#faq">
                        <h2>FAQ</h2>
                      </NavItem>

                      <NavItem eventKey={4} href="/#sponsors">
                        <h2>SPONSORS</h2>
                      </NavItem>
                    </Nav>

                </Navbar>
            </div>
        );
    }
}

/* Below, registering is a filler. It modifies a state that is irrelevant to your
component. Here, though, can you use mapStateToProps accordingly.*/
function mapStateToProps(state) {
    const { user } = state.authentication;
    return {
        user
    };
}

const connectedHeader = connect(mapStateToProps)(Header);
export { connectedHeader as Header };
