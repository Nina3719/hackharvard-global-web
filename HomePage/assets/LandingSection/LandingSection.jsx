import React from 'react';
import '../styles.css';
import Sticky from 'react-sticky-el';

class LandingSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="row" id="header-row">
                    <div className="col-sm-12" id="header-content">
                        <div id="logo" className="unselectable">
                            <img className="header-padding" src={require("../images/HH_2017_logo_white_shadow.png")}/>
                        </div>

                            <div id="title-and-tabs">
                            <div className="row">
                                <div className="header-padding" id="title-and-tabs-bottom-aligned">
                                    <h1 className="dateTop" id="date">
                                        OCTOBER 19-21, 2018
                                    </h1>
                                    <Sticky>
                                        <div className="col-sm-12" id="nav">
                                            <a href="#register">REGISTER</a>
                                            <a href="#schedule">SCHEDULE</a>
                                            <a href="#faq">FAQ</a>
                                            <a href="#sponsors">SPONSORS</a>
                                        </div>
                                    </Sticky>
                                </div>
                            </div>
                        </div>

                        {/* NEW SHIT */}

                        {/* <div>
                            <Navbar collapseOnSelect>
                                <a href="/">
                                    <Navbar.Header>
                                                <img className ="logoHeader"src={require("../images/logoWhite.png")}/>
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
                        </div> */}



                        <div className="header-padding social-icons" id="social-icons-large">
                            {/* <ul>
                                <li>
                                    <a href="https://www.facebook.com/hackharvard/" target="_blank" className="fa-stack fa-xl">
                                      <i className="fa fa-circle-thin fa-stack-2x"></i>
                                      <i className="fa fa-facebook fa-stack-1x"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/hack_harvard" target="_blank" className="fa-stack fa-xl">
                                      <i className="fa fa-circle-thin fa-stack-2x"></i>
                                      <i className="fa fa-twitter fa-stack-1x"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:hackharvard@gmail.com" className="fa-stack fa-xl">
                                      <i className="fa fa-circle-thin fa-stack-2x"></i>
                                      <i className="fa fa-envelope fa-stack-1x"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="http://medium.com/@hackharvard" target="_blank" className="fa-stack fa-xl">
                                      <i className="fa fa-circle-thin fa-stack-2x"></i>
                                      <i className="fa fa-medium fa-stack-1x"></i>
                                    </a>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                    <div className="col-sm-12" id="header-content-mobile">
                        <div id="logo-mobile" className="unselectable">
                            <img src={require("../images/HH_2017_logo_white_shadow.png")}/>
                        </div>
                        <h1 id="date-mobile">
                            OCTOBER 19-21, 2018
                        </h1>
                        <div id="nav-mobile">
                            <ul>
                                <li><a href="#register">REGISTER</a></li>
                                <li><a href="#schedule">SCHEDULE</a></li>
                                <li><a href="#faq">FAQ</a></li>
                                <li><a href="#sponsors">SPONSORS</a></li>
                            </ul>
                        </div>
                    </div>
                </div>






                {/* <div className="section-divider register-color unselectable">
                    <img src={require("../images/HH_2017_mountain_gray1.png")}/>
                </div> */}
            </div>
        );
    }
}

export default LandingSection;
