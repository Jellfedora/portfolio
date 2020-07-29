import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';
import Header from '../Header';
import Bio from '../Bio';
import Skills from '../Skills';
import Portfolio from '../Portfolio';
import Cv from '../Cv';
import Contact from '../Contact';
import { connect } from 'react-redux';

class SliderPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            settings: {
                dots: false,
                initialSlide: 0,
                arrows: false,
                duration: 200,
            }
        };
        this.slider = {};
    }

    componentDidMount() {

        // N'affiche les outline que lors d'une navigation au clavier
        var head = document.head || document.getElementsByTagName('head')[0];
        var axsStyles = head.appendChild(document.createElement('style'));
        document.addEventListener('mousedown', function () {
            axsStyles.innerHTML = '* { outline: none!important }';
        });
        document.addEventListener('keydown', function () {
            axsStyles.innerHTML = '';
        });
    }

    componentDidUpdate() {
        this.slickGoTo(this.props.selectedPage)

    }

    slickGoTo = (selectedPage) => {
        this.slider.slickGoTo(selectedPage)
    }

    pageIsChanged = (indexes) => {
        const action = { type: "BLINK_PAGE", value: indexes }
        this.props.dispatch(action)

        const action2 = { type: "SHOW_LABELS", value: false }
        this.props.dispatch(action2)
    }

    render() {
        const { settings } = this.state;
        if (this.props.selectedPage) {

        }
        return (
            <div className="home">
                <div className="fog-background"></div>
                <Slider
                    {...settings}
                    adaptiveHeight={true}
                    accessibility={true}
                    swipe={true}
                    wheel={true}
                    className="home__slider"
                    // onSwipe={(direction) => {
                    //     this.pageIsChanged(null)
                    // }}
                    afterChange={ele => {
                        if (ele) {
                            this.pageIsChanged(ele)
                        } else {
                            this.pageIsChanged(null)
                        }
                    }}

                    ref={ele => {
                        if (ele) {
                            this.slider = ele;
                        }
                    }}
                >
                    <Header />
                    <Bio />
                    <div>
                        <div className="home__skills">
                            <h2 className="home__skills__title" id="skills-title">
                                Skills
                        </h2>
                            <div className="home__skills__content">
                                <Skills />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="home__portfolio">
                            <h2 className="home__portfolio__title" id="portfolio-title">
                                Portfolio
                        </h2>
                            <div className="home__portfolio__content">
                                <Portfolio />
                            </div>
                        </div>
                    </div>
                    <Cv />
                    <div>
                        <div className="home__contact">
                            <h2 className="home__contact__title" id="contact-title">
                                Contact
                            </h2>
                            <div className="home__contact__content">
                                <Contact />
                            </div>
                        </div>
                    </div>
                </Slider>
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
export default connect(mapStateToProps, mapDispatchToProps)(SliderPage);

