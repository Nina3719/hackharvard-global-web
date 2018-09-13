import React from 'react';
import '../styles.css';

class ScheduleSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="section-divider-padding schedule-color"></div>
                <section className="schedule-color" id="schedule">
                    <div className="section-content">
                        <div className="section-title">
                            <h1>SCHEDULE.</h1>
                        </div>
                        <div className="section-padding"></div>
                        <div id="schedule-container">
                            <div className="schedule-card">
                                <h2 className="schedule-card-day">
                                    FRIDAY, OCT 19
                                </h2>
                                <div className="schedule-card-divider"></div>
                                <table className="schedule-card-table">
                                    <tbody><tr>
                                        <td className="schedule-event-time">4:00p</td>
                                        <td className="schedule-event-info">Registration Opens</td>
                                    </tr>
                                    <tr>
                                        <td className="schedule-event-time">5:00p</td>
                                        <td className="schedule-event-info">Dinner Begins</td>
                                    </tr>
                                    <tr>
                                        <td className="schedule-event-time">7:00p</td>
                                        <td className="schedule-event-info">Opening Ceremony</td>
                                    </tr>
                                    <tr>
                                        <td className="schedule-event-time">8:00p</td>
                                        <td className="schedule-event-info">Hacking Begins</td>
                                    </tr>
                                </tbody></table>
                            </div>
                            <div className="schedule-card">
                                <h2 className="schedule-card-day">
                                    SATURDAY, OCT 20
                                </h2>
                                <div className="schedule-card-divider"></div>
                                <table className="schedule-card-table">
                                    <tbody><tr>
                                        <td className="schedule-event-time">7:00a</td>
                                        <td className="schedule-event-info">Breakfast</td>
                                    </tr>
                                    <tr>
                                        <td className="schedule-event-time">12:00p</td>
                                        <td className="schedule-event-info">Lunch</td>
                                    </tr>
                                    <tr>
                                        <td className="schedule-event-time">2:00p</td>
                                        <td className="schedule-event-info">Tech Talks</td>
                                    </tr>
                                    <tr>
                                        <td className="schedule-event-time">6:00p</td>
                                        <td className="schedule-event-info">Dinner</td>
                                    </tr>
                                </tbody></table>
                            </div>
                            <div className="schedule-card">
                                <h2 className="schedule-card-day">
                                    SUNDAY, OCT 21
                                </h2>
                                <div className="schedule-card-divider"></div>
                                <table className="schedule-card-table">
                                    <tbody><tr>
                                        <td className="schedule-event-time">7:00a</td>
                                        <td className="schedule-event-info">Breakfast</td>
                                    </tr>
                                    <tr>
                                        <td className="schedule-event-time">9:00a</td>
                                        <td className="schedule-event-info">Hacking Ends</td>
                                    </tr>
                                    <tr>
                                        <td className="schedule-event-time">9:30a</td>
                                        <td className="schedule-event-info">Project Expo</td>
                                    </tr>
                                    <tr>
                                        <td className="schedule-event-time">11:30a</td>
                                        <td className="schedule-event-info">Closing Ceremony</td>
                                    </tr>
                                </tbody></table>
                            </div>
                        </div>

                        <div className="section-padding"></div>
                    </div>
                </section>
                <div className="section-divider unselectable schedule-color">
                    <img src={require("../images/HH_2017_mountain_gray2.png")}/>
                </div>

            </div>
        );
    }
}

export default ScheduleSection;
