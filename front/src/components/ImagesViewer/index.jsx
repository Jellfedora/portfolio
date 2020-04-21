import React, { Component } from 'react';
import { connect } from 'react-redux';
import JulienCvImg from '../../ressources/images/cv-2020.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ImagesViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageIsFullScreen: false
        };

    }

    componentDidMount() {
    }

    componentDidUpdate() {
        window.onscroll = () => {
            if (window.scrollY) {
                this.setState({ imageIsFullScreen: false });
            }
        };
    }

    showFullScreen = () => {

        this.setState({ imageIsFullScreen: true });
    }

    hideFullScreen = () => {
        this.setState({ imageIsFullScreen: false });
    }

    render() {

        return (
            <div className="imagesViewer__container">
                <img className="imagesViewer__container__image" src={JulienCvImg} alt="Curriculum Vitae" onClick={this.showFullScreen} />
                <div className={"imagesViewer__container__fullscreen-container " + (this.state.imageIsFullScreen ? 'imageIsFullScreen ' : '')} onClick={this.hideFullScreen}>
                    <img className={"imagesViewer__container__fullscreen-container__image blink"} src={JulienCvImg} alt="Curriculum Vitae" onClick={this.hideFullScreen} />
                    <button><FontAwesomeIcon icon="times-circle" size='2x' className="imagesViewer__container__fullscreen-container__button" onClick={this.hideFullScreen} /></button>
                </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(ImagesViewer);