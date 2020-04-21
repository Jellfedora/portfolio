import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chargeBorder: false,
            showLabels: false
        };
    }

    componentDidMount() {
        this.chargeBorder();

    }

    componentDidUpdate() {
        window.onscroll = () => {
            if (window.scrollY) {
                this.setState({ showLabels: false });
            }
        };
    }

    chargeBorder = () => {
        this.setState({ chargeBorder: true });
        // setTimeout(this.showLabels, 2000);
    }

    showLabels = () => {
        this.setState({ showLabels: true });
        setTimeout(this.reinitializeElement, 3000);
    }

    showLabelsWithoutTimeOut = () => {
        if (this.state.showLabels === true) {
            this.setState({ showLabels: false });
        } else {
            this.setState({ showLabels: true });
        }
    }

    reinitializeElement = () => {
        this.setState({
            // linkIsClicked: false,
            // linkTwoIsClicked: false,
            showLabels: false
        });
    }

    render() {

        return (
            <div className="navigation">
                <div className={" navigation__left " + (this.state.chargeBorder ? 'chargeBorderLeft ' : '') + (this.state.showLabels ? 'showLeftLabels slowBlink' : '')}>
                    {/* <div className="navigation__left__links">
                        <Link
                            activeClass="blink"
                            to="contact-title"
                            spy={true}
                            smooth={true}
                            duration={800}
                            className={"navigation__left__links__link"}
                            onClick={this.animate}
                        >
                            <FontAwesomeIcon icon="at" className="navigation__left__icon" />
                        </Link>
                        <span className={"navigation__left__links__label "}>Contact</span>
                    </div> */}
                    <div className="navigation__left__links">
                        <a href="https://www.linkedin.com/in/julien-lecointe/" className="navigation__left__links__link">
                            <FontAwesomeIcon icon={['fab', 'linkedin']} className="navigation__left__icon" />
                        </a>
                        <span className={"navigation__left__links__label "}>Linkedin</span>
                    </div>
                    <div className="navigation__left__links">
                        <a href="https://twitter.com/Jellfedora7" className="navigation__left__links__link">
                            <FontAwesomeIcon icon={['fab', 'twitter']} className="navigation__left__icon" />
                        </a>
                        <span className={"navigation__left__links__label "}>Twitter</span>
                    </div>
                    <div className="navigation__left__links">
                        <a href="https://github.com/Jellfedora" className="navigation__left__links__link">
                            <FontAwesomeIcon icon={['fab', 'github']} className="navigation__left__icon" />
                        </a>
                        <span className={"navigation__left__links__label "}>Github</span>
                    </div>
                </div>
                <div className={" navigation__right " + (this.state.chargeBorder ? 'chargeBorderRight ' : '') + (this.state.showLabels ? 'showRightLabels slowBlink' : '')}>
                    <div className="navigation__right__links">
                        <Link
                            activeClass="blink"
                            to="bio-title"
                            spy={true}
                            smooth={true}
                            duration={800}
                            className={"navigation__right__links__link"}
                            onClick={this.animate}
                        >
                            <FontAwesomeIcon icon="user-tie" className="navigation__right__icon" />
                        </Link>
                        <span className={"navigation__right__links__label "}>Parcours</span>
                    </div>
                    <div className="navigation__right__links">
                        <Link
                            activeClass="blink"
                            to="skills-title"
                            spy={true}
                            smooth={true}
                            duration={800}
                            className={"navigation__right__links__link"}
                            onClick={this.animate}
                        >
                            <FontAwesomeIcon icon="book-open" className="navigation__right__icon" />
                        </Link>
                        <span className={"navigation__right__links__label "}>Skills</span>
                    </div>
                    <div className="navigation__right__links">
                        <Link
                            activeClass="blink"
                            to="portfolio-title"
                            spy={true}
                            smooth={true}
                            duration={800}
                            className={"navigation__right__links__link"}
                            onClick={this.animateStepTwo}
                        >
                            <FontAwesomeIcon icon="briefcase" className="navigation__right__icon" />
                        </Link>
                        <span className={"navigation__right__links__label "}>Portfolio</span>
                    </div>
                    <div className="navigation__right__links">
                        <Link
                            activeClass="blink"
                            to="cv-title"
                            spy={true}
                            smooth={true}
                            duration={800}
                            className={"navigation__right__links__link"}
                            onClick={this.animateStepTwo}
                        >
                            <FontAwesomeIcon icon="file-pdf" className="navigation__right__icon" />
                        </Link>
                        <span className={"navigation__right__links__label "}>Cv</span>
                    </div>
                    <div className="navigation__right__links">
                        <Link
                            activeClass="blink"
                            to="contact-title"
                            spy={true}
                            smooth={true}
                            duration={800}
                            className={"navigation__right__links__link"}
                            onClick={this.animate}
                        >
                            <FontAwesomeIcon icon="at" className="navigation__right__icon" />
                        </Link>
                        <span className={"navigation__right__links__label "}>Contact</span>
                    </div>
                </div>
                <button className={"navigation__show-button " + (this.state.showLabels ? 'blink ' : 'buttonIsNotFocus')} onClick={this.showLabelsWithoutTimeOut}>
                    <FontAwesomeIcon icon="bars" className="navigation__left__icon" />
                </button>
            </div>
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
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

