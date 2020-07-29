import React, { Component } from 'react';
import JulienImg from '../../ressources/images/julien3.jpg';
class Header extends Component {
    render() {
        return (
            <div className="home__banner" id="home" >
                <img className="home__julien-photo slowBlink" src={JulienImg} alt="julien-photography" id="julien-photography" />
                <h1 className="home__title">Julien  Lecointe</h1>
                <h2 className="home__baseline">Développeur Web - Spécialisé en Web Apps React Js</h2>
            </div >
        );
    }
}
export default (Header);

