import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import { connect } from 'react-redux';
import Header from '../Header';
import Bio from '../Bio';
import Skills from '../Skills';
import Portfolio from '../Portfolio';
import Cv from '../Cv';
import Contact from '../Contact';

class MobilePage extends Component {
    render() {
        return (
            <div>
                <div className="fog-background"></div>
                <Header />
                <Bio />
                <div className="home__skills">
                    <h2 className="home__skills__title" id="skills-title">
                        Skills
                        </h2>
                    <div className="home__skills__content">
                        <Skills />
                    </div>
                </div>
                <Slide right>
                    <div className="home__portfolio">
                        <h2 className="home__portfolio__title" id="portfolio-title">
                            Portfolio
                        </h2>
                        <Portfolio />
                    </div>
                </Slide>
                <Slide left>
                    <Cv />
                </Slide>
                <div className="home__contact">
                    <h2 className="home__contact__title" id="contact-title">
                        Contact
                            </h2>
                    <div className="home__contact__content">
                        <Contact />
                    </div>
                </div>

            </div >

        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
}
const mapStateToProps = (state) => {
    return {
        selectedPage: state.navigation.selectedPage,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MobilePage);

