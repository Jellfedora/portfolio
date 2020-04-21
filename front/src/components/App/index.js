import React from 'react';
import { Provider } from "react-redux";
import store from '../../store';
import Home from '../Home';
import Logo from '../Logo';
import Navigation from '../Navigation';
import SplashScreen from '../Splashscreen';
import "../../styles/index.scss";
// Fontawesome 5
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAt, faGraduationCap, faBriefcase, faUserTie, faBookOpen, faBars, faFilePdf, faDownload, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
library.add(faTwitter, faLinkedin, faGithub, faAt, faGraduationCap, faBriefcase, faUserTie, faBookOpen, faBars, faFilePdf, faDownload, faTimesCircle);

const App = () => {
    return (
        <Provider store={store} className="app"  >
            {/* <SplashScreen /> */}

            <div className="app__component" id="fog">
                <Logo />
                <Navigation />
                <Home />
            </div>
            {/* <footer className="footer">
                <p>Et si on se retrouvait sur les réseaux sociaux ?</p>
                <span>ça me ferait trés plaisir !</span>
            </footer> */}
        </Provider>
    );
};
export default App;