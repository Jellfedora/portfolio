import React, { Component } from 'react';
import { connect } from 'react-redux';

class Splashcreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    componentDidMount() {
    }

    componentDidUpdate() {
    }


    render() {

        return (
            <div className="splash">
                <h1>test</h1>

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
export default connect(mapStateToProps, mapDispatchToProps)(Splashcreen);

