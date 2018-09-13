import React from 'react';
import '../styles.css';
// import axios from 'axios';
// import EAAlert from './EAAlert';
// import { Flex, Box } from 'rebass';
// import { Radio, InputGroup, MenuItem, DropdownButton, Alert, Button, Modal, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class RegisterSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <section className="register-color" id="register">
                    <div className="section-content">
                        <div className="section-title">
                            <h1>WELCOME.</h1>
                        </div>
                        <div className="section-padding"></div>
                        <div className="row">
                            <div className="col-sm-12">
                                <p id="mission-statement">
                                    Join us for the fourth iteration of HackHarvard, a 36-hour hackathon hosted on Harvard University's historic campus.  This year, we're crossing boundaries, discovering new solutions, and pushing the intersection of technology and society forward.
                                    <br/><br/>
                                    If your project goes off the beaten path, challenges basic assumptions, or is something wed actually use, we want you to bring it to life here. Every field is fair game - all you need to bring is an <b>idea</b> and the <b>passion</b> to create.
                                    <br/><br/>
                                    <b id="closed"><a href="/apply">Click here to apply before the 9/8 deadline!</a></b>
                                </p>
                            </div>

                        </div>
                        <div className="section-padding"></div>
                    </div>
                </section>
                <div className="section-divider register-color unselectable">
                    <img src={require("../images/HH_2017_mountain_gray1.png")}/>
                </div>
            </div>
        );
    }
}

export default RegisterSection;
