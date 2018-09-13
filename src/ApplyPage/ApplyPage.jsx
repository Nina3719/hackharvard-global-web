import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Image } from 'react-bootstrap';


import './assets/styles.css';

import ApplySection from './assets/ApplySection';


class ApplyPage extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>

                <div className="container-fluid">

                    <a id="mlh-trust-badge" href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank"><img src="https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg" alt="Major League Hacking 2018 Hackathon Season" styles="width:100%"/></a>

                </div>
                <div>
                    < ApplySection />
                </div>


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

const connectedApplyPage = connect(mapStateToProps)(ApplyPage);
export { connectedApplyPage as ApplyPage };
