import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            message: null,
            lastname: null,
            firstname: null
        };

    }

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    handleSubmit = (event) => {
        alert('Le nom a été soumis : ' + this.state.firstname);
        alert('Le nom a été soumis : ' + this.state.lastname);
        alert('Le nom a été soumis : ' + this.state.message);
        event.preventDefault();
    }

    lastnameChange = (event) => {
        this.setState({ lastname: event.target.value });
    }

    firstnameChange = (event) => {
        this.setState({ firstname: event.target.value });
    }

    messageChange = (event) => {
        this.setState({ message: event.target.value });
    }

    render() {

        return (
            <div className="contact">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nom :
                    <input type="text" value={this.state.lastname} onChange={this.lastnameChange} />
                    </label>
                    <label>
                        Prénom :
                    <input type="text" value={this.state.firstname} onChange={this.firstnameChange} />
                    </label>
                    <label>
                        Message :
                    <textarea type="text" value={this.state.message} onChange={this.messageChange} />
                    </label>
                    <input type="submit" value="Envoyer" />
                </form>
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
export default connect(mapStateToProps, mapDispatchToProps)(Contact);