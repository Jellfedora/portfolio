import React, { Component } from 'react';
import { connect } from 'react-redux';
// import JulienCvImg from '../../ressources/images/cv-2020.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // imageIsFullScreen: false
        };

    }

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    // showFullScreen = () => {
    //     console.log('test')
    //     this.setState({ imageIsFullScreen: true });
    // }

    render() {

        return (
            <div className="skills">
                <div className="skills__hard-skills">
                    <h3 className="skills__hard-skills__title">Hard Skills</h3>
                    <div className="skills__hard-skills__front">
                        <div className="skills__hard-skills__front__title">
                            <h4>Front-End / Intégration</h4>
                        </div>
                        <div className="skills__hard-skills__front__content">
                            <span>Html5</span>
                            <span>Css3</span>
                            <span>React / Redux</span>
                            <span>Javascript</span>
                            <span>AngularJs</span>
                            <span>Bootstrap</span>
                            <span>Responsive Design</span>
                        </div>
                    </div>
                    <div className="skills__hard-skills__back">
                        <div className="skills__hard-skills__back__title">
                            <h4>Back-End</h4>
                        </div>
                        <div className="skills__hard-skills__back__content">
                            <span>Mysql</span>
                            <span>Php</span>
                            <span>Symfony</span>
                            <span>Codeigniter</span>
                            <span>Cakephp</span>
                            <span>Wordpress</span>
                        </div>
                    </div>
                    <div className="skills__hard-skills__other">
                        <div className="skills__hard-skills__other__title">
                            <h4>Autres</h4>
                        </div>
                        <div className="skills__hard-skills__other__content">
                            <span>Git</span>
                            <span>Github</span>
                            <span>Gitlab</span>
                            <span>Administration Systéme</span>
                        </div>
                    </div>
                </div>
                <div className="skills__soft-skills">
                    <h3 className="skills__soft-skills__title">Soft Skills</h3>
                    <ul className="skills__soft-skills__content">
                        <li className="skills__soft-skills__content__curious">Curieux</li>
                        <li>Sociable</li>
                        <li>Sérieux</li>
                        <li>Créatif</li>
                    </ul>
                </div>
                <div className="skills__language">
                    <h3 className="skills__language__title">Langues</h3>
                    <ul className="skills__language__content">
                        <li>Francais</li>
                        <li>Anglais</li>
                    </ul>
                </div>
                <div className="skills__mad-skills">
                    <h3 className="skills__mad-skills__title">Mad Skills</h3>
                    <ul className="skills__mad-skills__content">
                        <li>Bénévole en refuge canin</li>
                        <li>Membre d'une équipe Esport -> French Army Ceres Special</li>
                        <li>Mentor d'une jeune padawan de 7 mois</li>
                    </ul>
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
export default connect(mapStateToProps, mapDispatchToProps)(Skills);