import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-scroll'

class Logo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rotate: false
        };
    }
    componentDidMount() {
        const action = { type: "BLINK_PAGE", value: 0 }
        this.props.dispatch(action)
    }

    changePage = () => {
        const action = { type: "CHANGE_PAGE", value: 0 }
        this.props.dispatch(action)

        const action2 = { type: "SHOW_LABELS", value: false }
        this.props.dispatch(action2)
    }

    render() {

        return (
            <div className="logo" id="logo">
                <Link
                    className={['logo__title ' + (this.props.selectedPage === 0 && this.props.deviceIsLarge ? 'logo-is-active' : '')]}
                    onClick={() => {
                        if (this.props.deviceIsLarge) {
                            this.changePage()
                        }
                    }}
                    to='home'
                    spy={this.props.deviceIsLarge !== true ? true : false}
                    smooth={this.props.deviceIsLarge !== true ? true : false}
                    activeClass={this.props.deviceIsLarge !== true ? 'logo-is-active' : ''}
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
        selectedPage: state.navigation.blinkPage,
        deviceIsLarge: state.navigation.deviceIsLarge,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Logo);

