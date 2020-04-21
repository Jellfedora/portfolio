import React, { Component } from 'react';
import Header from '../Header';
import Skills from '../Skills';
import Portfolio from '../Portfolio';
import ImagesViewer from '../ImagesViewer';
import CvDownloadModal from '../CvDownloadModal';
import Contact from '../Contact';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import JulienImg from '../../ressources/images/julien3.jpg';


class Home extends Component {
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
            <div className="home">
                <div className="fog-background"></div>
                <div className="home__banner" id="home-top">
                    <img className="home__julien-photo slowBlink" src={JulienImg} alt="julien-photography" id="julien-photography" />
                    <h1 className="home__title">Julien  Lecointe</h1>
                    <h2 className="home__baseline">Développeur Web Full Stack</h2>
                </div>

                <div className="home__bio">
                    <h2 className="home__bio__title" id="bio-title">
                        Je suis un Développeur Web amoureux de son métier.
                    </h2>
                    <div className="home__bio__text">
                        <p className="home__bio__text__intro">
                            Je suis un développeur Web français vivant actuellement prés de La Rochelle. J'ai passé mon diplôme de concepteur développeur d'Applications d'un niveau bac +3/4 en mars 2020 et je suis en attente du résultat ( celui-ci est prometteur! ).</p>
                        <p className="home__bio__text__school">J'ai préparé ce diplôme avec l'école o'clock chez qui j'ai effectué deux formations,
                            <br />une première d'une durée de 6 mois où j'ai acquéri les connaissances et les bonnes pratiques pour devenir développeur web et où j'ai aussi éffectué 1 mois de spécialisation pour prendre en main et personaliser le CMS Wordpress. Puis une seconde d'une durée de 1 an en alternance avec l'entreprise E-Wi Télécom basée à Saint-Jean d'Angely et spécialisée dans les infrastructures Wi-Fi pour les professionnels du tourisme.
                        </p>
                        <p className="home__bio__text__enterprise">
                            C'est dans cette entreprise que j'ai réellement pu mettre en application toutes les notions apprises en formation que ce soit du développement web ou de la gestion de projet.
                        </p>
                    </div>
                </div>
                <div className="home__skills">
                    <h2 className="home__skills__title" id="skills-title">
                        Skills
                    </h2>
                    <div className="home__skills__content">
                        {/* <Skills /> */}
                    </div>
                </div>
                <div className="home__portfolio">
                    <h2 className="home__portfolio__title" id="portfolio-title">
                        Portfolio
                    </h2>
                    <div className="home__portfolio__content">
                        <Portfolio />
                    </div>
                </div>
                <div className="home__cv">
                    <h2 className="home__cv__title" id="cv-title">
                        Cv
                    </h2>
                    <div className="home__cv__text">
                        <p>
                            Je suis actuellement en recherche d'emploi et je recherche un poste plutôt orienté front-end avec la librairie React et le gestionnaire d'état Redux.<br />
                            Néammoins je suis aussi formé et j'ai plaisir à travailler et approfondir ma maitrise sur du back-end avec les frameworks Symfony, Codeigniter et CakePHP.
                            En entreprise j'ai souvent travaillé sur des projets utilisant jQuery et angularJs pour le front-end et CakePHP et CodeIgniter pour le back-end.
                            Enfin, étant toujours en soif de me former, j'aurais plaisir à apprendre à maitriser n'importe quel outils n'étant pas encore dans mes cordes!
                        </p>
                        <p>
                            Si vous êtes intéréssé par mon profil pour renforcer votre équipe, voiçi ci dessous mon curriculum vitae, visionable içi même ou téléchargeable au format pdf.
                        </p>
                    </div>
                    <ImagesViewer />
                    <CvDownloadModal />
                </div>
                <div className="home__skills">
                    <h2 className="home__skills__title" id="contact-title">
                        Contact
                    </h2>
                    <div className="home__skills__content">
                        <Contact />
                    </div>
                </div>
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
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);

