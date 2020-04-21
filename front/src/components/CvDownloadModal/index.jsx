import React, { Component } from 'react';
import { connect } from 'react-redux';
import JulienCvImg from '../../ressources/images/cv-2020.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CvDownloadModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageIsFullScreen: false
        };

    }

    componentDidMount() {
        window.onscroll = () => {
            if (window.scrollY) {
                this.setState({ imageIsFullScreen: false });
            }
        };
    }

    componentDidUpdate() {
    }

    showFullScreen = () => {
        console.log('test')
        this.setState({ imageIsFullScreen: true });
    }

    hideFullScreen = () => {
        this.setState({ imageIsFullScreen: false });
    }

    render() {

        return (
            <div className="cv-download-modal">
                <a href={JulienCvImg} download="cv-lecointe-julien-2020"><FontAwesomeIcon icon="download" className="cv-download-modal__icon" /></a>
                {/* <img className="home__cv__image" src={JulienCvImg} alt="Curriculum Vitae" onClick={this.showFullScreen} />
                <img className={"home__cv__fullscreen-image " + (this.state.imageIsFullScreen ? 'imageIsFullScreen ' : '')} src={JulienCvImg} alt="Curriculum Vitae" onClick={this.hideFullScreen} /> */}
            </div>
        )
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
export default connect(mapStateToProps, mapDispatchToProps)(CvDownloadModal);