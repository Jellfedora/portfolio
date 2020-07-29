import React, { Component } from 'react';
import Particles from '../Particles';
import SliderPage from '../SliderPage';
import { connect } from 'react-redux';
import MobilePage from '../MobilePage';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deviceIsLarge: false,
        };
    }

    componentDidMount() {// Récupére la largeur de fenetre
        console.image("https://media.giphy.com/media/3oriNLx3dUqFgVi86I/giphy-downsized.gif");
        if (window.innerWidth >= 992) {
            const action = { type: "DEVICE_WIDTH", value: true }
            this.props.dispatch(action)
        } else {
            const action = { type: "DEVICE_WIDTH", value: false }
            this.props.dispatch(action)
        }
        // Surveille le redimensionnement de la fenetre
        window.addEventListener('resize', this.resize)
    }

    resize = () => {
        this.forceUpdate();
        if (window.innerWidth >= 992) {
            const action = { type: "DEVICE_WIDTH", value: true }
            this.props.dispatch(action)
        } else {
            const action = { type: "DEVICE_WIDTH", value: false }
            this.props.dispatch(action)
        }
    }

    render() {
        return (
            <div className="home">
                <Particles />
                <div className="fog-background"></div>
                {this.props.deviceIsLarge
                    ? <SliderPage />

                    : <MobilePage />
                }
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
        deviceIsLarge: state.navigation.deviceIsLarge,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);

