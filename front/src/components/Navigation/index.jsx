import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';
import { Spring } from 'react-burgers';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chargeBorder: false
        };
    }

    componentDidMount() {
        // Charge menu when mount
        this.chargeBorder();
        // Close menu when user scroll
        window.addEventListener('scroll', this.reinitializeElement);

    }

    chargeBorder = () => {
        this.setState({ chargeBorder: true });
    }

    showLabels = () => {
        const action = { type: "SHOW_LABELS", value: true }
        this.props.dispatch(action)
        setTimeout(this.reinitializeElement, 3000);
    }

    showLabelsWithoutTimeOut = () => {
        if (this.props.showLabels === true) {
            const action = { type: "SHOW_LABELS", value: false }
            this.props.dispatch(action)
        } else {
            const action = { type: "SHOW_LABELS", value: true }
            this.props.dispatch(action)
        }
    }

    reinitializeElement = () => {
        const action = { type: "SHOW_LABELS", value: false }
        this.props.dispatch(action)
    }

    changePage = (selectedPage) => {
        const action = { type: "CHANGE_PAGE", value: selectedPage }
        this.props.dispatch(action)

        const action2 = { type: "SHOW_LABELS", value: false }
        this.props.dispatch(action2)
    }

    render() {

        return (
            <div className="navigation">
                <div className={"navigation__right " + (this.state.chargeBorder ? 'chargeBorderRight ' : '') + (this.props.showLabels ? 'showRightLabels slowBlink' : '')}>
                    <div className="navigation__right__links">
                        <Link
                            className={['navigation__right__links__link ' + (this.props.selectedPage === 1 ? 'blink' : '')]}
                            onClick={() => {
                                if (this.props.deviceIsLarge) {
                                    this.changePage(1)
                                }
                            }}
                            to='bio-title'
                            spy={this.props.deviceIsLarge !== true ? true : false}
                            smooth={this.props.deviceIsLarge !== true ? true : false}
                            activeClass="blink"
                        >
                            <FontAwesomeIcon icon="user-tie" className="navigation__right__icon" />
                            <span className={"navigation__right__links__label "}>Parcours</span>
                        </Link>
                    </div>
                    <div className="navigation__right__links">
                        <Link
                            className={['navigation__right__links__link ' + (this.props.selectedPage === 2 ? 'blink' : '')]}
                            onClick={() => {
                                if (this.props.deviceIsLarge) {
                                    this.changePage(2)
                                }
                            }}
                            to='skills-title'
                            spy={this.props.deviceIsLarge !== true ? true : false}
                            smooth={this.props.deviceIsLarge !== true ? true : false}
                            activeClass="blink"
                        >
                            <FontAwesomeIcon icon="book-open" className="navigation__right__icon" />
                            <span className={"navigation__right__links__label "}>Compétences</span>
                        </Link>
                    </div>
                    <div className="navigation__right__links">
                        <Link
                            className={['navigation__right__links__link ' + (this.props.selectedPage === 3 ? 'blink' : '')]}
                            onClick={() => {
                                if (this.props.deviceIsLarge) {
                                    this.changePage(3)
                                }
                            }}
                            to='portfolio-title'
                            spy={this.props.deviceIsLarge !== true ? true : false}
                            smooth={this.props.deviceIsLarge !== true ? true : false}
                            activeClass="blink"
                        >
                            <FontAwesomeIcon icon="briefcase" className="navigation__right__icon" />
                            <span className={"navigation__right__links__label "}>Portfolio</span>
                        </Link>
                    </div>
                    <div className="navigation__right__links">
                        <Link
                            className={['navigation__right__links__link ' + (this.props.selectedPage === 4 ? 'blink' : '')]}
                            onClick={() => {
                                if (this.props.deviceIsLarge) {
                                    this.changePage(4)
                                }
                            }}
                            to='cv-title'
                            spy={this.props.deviceIsLarge !== true ? true : false}
                            smooth={this.props.deviceIsLarge !== true ? true : false}
                            activeClass="blink"
                        >
                            <FontAwesomeIcon icon="file-pdf" className="navigation__right__icon" />
                            <span className={"navigation__right__links__label "}>Cv</span>
                        </Link>
                    </div>
                    <div className="navigation__right__links">
                        <Link
                            className={['navigation__right__links__link ' + (this.props.selectedPage === 5 ? 'blink' : '')]}
                            onClick={() => {
                                if (this.props.deviceIsLarge) {
                                    this.changePage(5)
                                }
                            }}
                            to='contact-title'
                            spy={this.props.deviceIsLarge !== true ? true : false}
                            smooth={this.props.deviceIsLarge !== true ? true : false}
                            activeClass="blink"

                        >
                            <FontAwesomeIcon icon="at" className="navigation__right__icon" />
                            <span className={"navigation__right__links__label "}>Contact</span>
                        </Link>
                    </div>
                </div>
                <Spring
                    active={this.props.showLabels}
                    color={'#dfbe8d'}
                    width={20}
                    lineSpacing={5}
                    lineHeight={2}
                    className={"navigation__show-button " + (this.props.showLabels ? 'blink ' : 'buttonIsNotFocus')}
                    onClick={this.showLabelsWithoutTimeOut} />
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
        selectedPage: state.navigation.blinkPage,
        showLabels: state.navigation.showLabels,
        deviceIsLarge: state.navigation.deviceIsLarge,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

