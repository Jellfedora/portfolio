import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import sample from '../../ressources/videos/background.mp4';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    componentDidMount() {
        // var vid = document.getElementById("video");
        // vid.playbackRate = 0.7;
    }

    componentDidUpdate() {
    }



    render() {

        return (
            <Router>
                <div className="header">
                    <Link className="header__links" to="/">
                        <span>Accueil</span>
                    </Link>
                    <Link className="header__links" to="/portfolio">
                        <span>Portfolio</span>
                    </Link>
                    <Link className="header__links" to="/contact">
                        <span>Contact</span>
                    </Link>
                </div>
                {/* <video id="video" loop autoPlay muted playbackRate="0.5">
                    <source src={sample} type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}
                <Switch>
                    <Route path="/">
                        {/* <Home /> */}
                        {/* <p>home</p> */}
                    </Route>
                </Switch>
            </Router >

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
export default connect(mapStateToProps, mapDispatchToProps)(Header);

