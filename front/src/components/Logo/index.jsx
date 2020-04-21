import React, { Component } from 'react';
import Header from '../Header';
import { Link, animateScroll as scroll } from "react-scroll";
import { connect } from 'react-redux';

class Logo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rotate: false
        };

    }
    componentDidMount() {
    }

    componentDidUpdate() {
    }

    render() {

        return (
            <div className="logo" id="logo">
                <Link
                    activeClass="logo-is-active"
                    to="home-top"
                    spy={true}
                    smooth={true}
                    duration={800}
                    offset={-70}
                    className="logo__title"
                >
                    <span className="logo__title__first">J</span>
                    <br />
                    <span className="logo__title__second">L</span>
                </Link>
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
export default connect(mapStateToProps, mapDispatchToProps)(Logo);

