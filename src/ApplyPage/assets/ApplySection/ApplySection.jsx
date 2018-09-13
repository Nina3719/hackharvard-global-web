import React from 'react';
import '../styles.css';
import TypeForm from './TypeForm';
import Sticky from 'react-sticky-el';

class ApplySection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Sticky>
                <div className="section-padding"></div>
                <section className="register-color" id="apply">
                    <div className="section-content">

                        <div className="section-title">
                            <h1>APPLY.</h1>
                        </div>
                        <div className="section-padding"></div>
                                {/* className="col-sm-12" */}


                    </div>
                </section>
                </Sticky>

                <div >
                    < TypeForm />
                </div>
                {/* <div className="section-divider register-color unselectable">
                    <img src={require("../images/HH_2017_mountain_gray1.png")}/>
                </div> */}
            </div>
        );
    }
}

export default ApplySection;
