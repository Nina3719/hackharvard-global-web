import React from 'react';
import '../styles.css';

class FAQSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="section-divider-padding faq-color"></div>
                <section className="faq-color" id="faq">
                    <div className="section-content">
                        <div className="section-title">
                            <h1>FAQ.</h1>
                        </div>
                        <div className="section-padding"></div>
                        <div className="row" id="question-row">
                          <div className="col-sm-3 col-sm-offset-1 question-col"><h3 className="faq-question" id="0">Can I attend?</h3><p className="faq-answer" id="0">As long as you are a student at any college in the world and are 18 or older, you are invited to apply to HackHarvard! High school students are not eligible to attend.</p><br/><h3 className="faq-question" id="3">How do I get there?</h3><p className="faq-answer" id="3">If you live in the Greater Boston area, you can travel using the MBTA Red Line and get off at the Harvard Square station. Buses will also be sent to various universities in the Northeastern United States and Canada (details to come). Otherwise, you are responsible for arranging your travel accommodations.</p><br/><h3 className="faq-question" id="6">What should I bring?</h3><p className="faq-answer" id="6">Bring a laptop for hacking and a valid student ID for admission into the event. If you are planning to borrow hardware during the hackathon, you will also need a government-issued photo ID. We will provide everything else and more, including food, free swag, and hacker love. </p><br/><h3 className="faq-question" id="9">What about hardware hacks?</h3><p className="faq-answer" id="9">We welcome any and all hardware hacks! We will provide Arduinos, Pebbles, Raspberry Pis, and more, although you are more than welcome to bring your own hardware to work with. A full list of hardware will be released as the event approaches.</p><br/></div>
                          <div className="col-sm-4 question-col"><h3 className="faq-question" id="1">How does registration work?</h3><p className="faq-answer" id="1">Registration is open - all you have to do is complete the application! We will be in contact with all first-round applicants regarding their status in early to mid September.</p><br/><h3 className="faq-question" id="4">What will I eat?</h3><p className="faq-answer" id="4">We will provide all meals between dinner on Friday and brunch on Sunday (plus snacks available at any time of the day or night!). If you have any dietary restrictions, please let us know and we will do our best to accommodate them.</p><br/><h3 className="faq-question" id="7">How do teams work?</h3><p className="faq-answer" id="7">Each team consists of a maximum of four members. You can create a team and designate teammates during registration, or you can register as an individual. Admission decisions will be all-or-none, so either all of your teammates will receive admission if selected or none of your teammates will receive admission.</p><br/><h3 className="faq-question" id="10">What about travel reimbursements?</h3><p className="faq-answer" id="10">HackHarvard aims to support and foster a regional community of collegiate hackers. For this reason, buses will be sent to various universities in the Northeastern United States and Canada. We will notify applicants when these routes have been finalized. Unfortunately, we cannot offer any other travel reimbursements at this time. We hope that you will still consider joining us in October!</p><br/></div>
                          <div className="col-sm-3 question-col"><h3 className="faq-question" id="2">I don't code -- what about me?</h3><p className="faq-answer" id="2">Not all hackers code! In fact, you've found the perfect place and time to pick up new skills and concepts. There will be mentors, workshops, and tech talks to help ease you through the hackathon experience. Applications are not filtered based on experience.</p><br/><h3 className="faq-question" id="5">Where will I sleep?</h3><p className="faq-answer" id="5">Unless you’re a bot (in which case you won’t be admitted), you’re a human who needs sleep! While it may be tempting to hack all night, we will also have dedicated on-site sleep spaces for those of you trying to get some shut-eye.</p><br/><h3 className="faq-question" id="8">What if I don't have a team?</h3><p className="faq-answer" id="8">If you registered as an individual and do not yet have a team, don’t sweat it. There will be several events geared towards facilitating team formation and project ideation. We will help you find people to work with!</p><br/></div>
                        </div>
                        <div className="section-padding"></div>
                    </div>
                </section>
                <div className="section-divider unselectable faq-color">
                    <img src={require("../images/HH_2017_mountain_gray3.png")}/>
                </div>
            </div>
        );
    }
}

export default FAQSection;
