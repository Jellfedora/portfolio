import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogeMeImg from '../../ressources/images/loge-me.png';
import OArena from '../../ressources/images/e-sport-arena.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Portfolio extends Component {
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
            <div className="portfolio">
                <div className="portfolio__content__project">
                    <h3 className="portfolio__content__project__title">Loge Me</h3>
                    <p className="portfolio__content__project__text">Site immobilier incluant un systéme de notation réalisé en solo avec React / Redux pour le Front End et Symfony 4 en tant que Rest API.
                    C'est ce projet qui a été présenté lors de ma soutenance au diplôme de Concepteur Développeur D'applications.
                            </p>
                    <img className="portfolio__content__project__img" src={LogeMeImg} alt="loge-me-photography" />
                    <a className="portfolio__content__project__link" href="https://github.com/O-clock-Pulsar/loge-me">
                        <FontAwesomeIcon icon={['fab', 'github']} className="portfolio__content__project__link__icon" /> Répertoire du projet
                    </a>
                </div>
                <div className="portfolio__separator"></div>
                <div className="portfolio__content__project">
                    <h3 className="portfolio__content__project__title">oArena</h3>
                    <p className="portfolio__content__project__text">Projet réalisé en duo et avec le Cms Wordpress afin de créer le site d'actualité et la boutique d'une aréne e-sport pour le projet de fin d'étude du socle avec l'école O'Clock.
                    Le théme et les plugins ont tous étés réalisés par nos soins.
                            </p>
                    <img className="portfolio__content__project__img" src={OArena} alt="oArena-photography" />
                    <a className="portfolio__content__project__link" href="https://github.com/Jellfedora/Project-E-Sport-Arena">
                        <FontAwesomeIcon icon={['fab', 'github']} className="portfolio__content__project__link__icon" /> Répertoire du projet
                    </a>
                </div>
            </div >
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
export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);