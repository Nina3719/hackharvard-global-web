import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Image } from 'react-bootstrap';
import Sticky from 'react-sticky-el';


import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor';

import './assets/styles.css';

import LandingSection from './assets/LandingSection';
import {Header} from '../_components/Header';
import RegisterSection from './assets/RegisterSection';
import ScheduleSection from './assets/ScheduleSection';
import FAQSection from './assets/FAQSection';
import SponsorsSection from './assets/SponsorsSection';


class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isStuck: true
        };
        configureAnchors({offset: -140});
        this.handleScroll.bind(this)
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll(){
        var stickyClass = document.getElementsByClassName("sticky")[0];
        stickyClass ? console.log("true") : console.log("false");
        this.setState({
            isStuck: stickyClass ? true : false
        })
    }


    render() {
        return (
            <div>
                <div className="container-fluid">
                    <a id="mlh-trust-badge" href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank"><img src="https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg" alt="Major League Hacking 2018 Hackathon Season" styles="width:100%"/></a>

                    <div>
                        < LandingSection />
                    </div>

                    {/* <Sticky>
                        <div>
                            {!this.state.isStuck ? < Header isStuck = { !this.state.isStuck } /> : <br/>}
                        </div>
                    </Sticky> */}

                    <br/>

                    <ScrollableAnchor id={'register'}>
                        <div>
                            < RegisterSection />
                        </div>
                    </ScrollableAnchor>



                    <ScrollableAnchor id={'schedule'}>
                        <div>
                            <ScheduleSection />
                        </div>
                    </ScrollableAnchor>

                    <ScrollableAnchor id={'faq'}>
                        <div>
                            <FAQSection/>
                        </div>
                    </ScrollableAnchor>

                    <ScrollableAnchor id={'sponsors'}>
                        <div>
                            <SponsorsSection/>
                        </div>
                    </ScrollableAnchor>

                    <div className="section-divider-padding footer-color"></div>
                    <section className="footer-color" id="footer">
                        <div className="section-content" id="social-icons-mobile">
                            <a href="https://www.facebook.com/hackharvard/" target="_blank" className="fa-stack fa-xl">
                              <i className="fa fa-circle-thin fa-stack-2x"></i>
                              <i className="fa fa-facebook fa-stack-1x"></i>
                            </a>
                            <a href="https://twitter.com/hack_harvard" target="_blank" className="fa-stack fa-xl">
                              <i className="fa fa-circle-thin fa-stack-2x"></i>
                              <i className="fa fa-twitter fa-stack-1x"></i>
                            </a>
                            <a href="mailto:hackharvard@gmail.com" className="fa-stack fa-xl">
                              <i className="fa fa-circle-thin fa-stack-2x"></i>
                              <i className="fa fa-envelope fa-stack-1x"></i>
                            </a>
                            <a href="http://medium.com/@hackharvard" target="_blank" className="fa-stack fa-xl">
                              <i className="fa fa-circle-thin fa-stack-2x"></i>
                              <i className="fa fa-medium fa-stack-1x"></i>
                            </a>
                        </div>
                    </section>
                </div>

                {/* <ScrollableAnchor id={'team'}>
                    <div>
                        < TeamPage />
                    </div>
                </ScrollableAnchor> */}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
