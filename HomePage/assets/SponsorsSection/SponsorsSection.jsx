import React from 'react';
import '../styles.css';

class SponsorsSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="section-divider-padding sponsors-color"></div>
                <section className="sponsors-color" id="sponsors">
                    <div className="section-content">
                        <div className="section-title">
                            <h1>PAST SPONSORS.</h1>
                        </div>
                        <div className="section-padding"></div>
                        <div className="row sponsor-images giga" align="center">
                            <a href="https://www.microsoft.com" target="_blank"><img src={require("../images/microsoft.png")}/></a>
                        </div>
                        <div className="row sponsor-images mega" align="center">
                            <a href="https://www.dell.com" target="_blank"><img src={require("../images/dell.png")}/></a>
                            <a href="https://www.amazon.com" target="_blank"><img src={require("../images/amazon.png")}/></a>
                            <a href="https://www.facebook.com" target="_blank"><img src={require("../images/facebook.png")}/></a>
                            <a href="https://voatz.com" target="_blank"><img src={require("../images/voatz.png")}/></a>
                            <a href="https://bestfriends.org" target="_blank"><img src={require("../images/bf-sta.png")}/></a>
                            <a href="https://campus.capitalone.com" target="_blank"><img src={require("../images/capitalone.png")}/></a>
                            <a href="https://www.kensho.com" target="_blank"><img src={require("../images/kensho.png")}/></a>
                        </div>
                        <div className="row sponsor-images kilo" align="center">
                            <a href="https://www.3redgroup.com" target="_blank"><img src={require("../images/3red.png")}/></a>
                            <a href="https://www.bloomberg.com/careers/internships" target="_blank"><img src={require("../images/bloomberg.png")}/></a>
                            <a href="https://www.hudson-trading.com" target="_blank"><img src={require("../images/hrt.png")}/></a>
                            <a href="https://guidebook.com/" target="_blank"><img src={require("../images/guidebook.png")}/></a>
                        </div>
                        <div className="row sponsor-images sub-kilo" align="center">
                            <a href="https://www.google.com/intl/en/about" target="_blank"><img src={require("../images/google.png")}/></a>
                            <a href="https://interviewing.io" target="_blank"><img src={require("../images/interviewing-io.png")}/></a>
                        </div>
                        <div className="row helptext" align="center">
                            <h4>If you would like to sponsor this event, please reach out to us at <a href="mailto:sponsors@hackharvard.io">sponsors@hackharvard.io!</a></h4>
                        </div>
                        <div className="section-padding"></div>
                    </div>
                </section>
                <div className="section-divider unselectable sponsors-color">
                    <img src={require("../images/HH_2017_mountain_gray4.png")}/>
                </div>
            </div>
        );
    }
}

export default SponsorsSection;
