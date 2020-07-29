import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
class Bio extends Component {

    render() {

        return (
            <div className="home__bio">
                <h2 className="home__bio__title" id="bio-title">
                    Bonjour Vous!
                        </h2>
                <div className="home__bio__text">
                    <Slide left>
                        <p className="home__bio__text__intro">
                            Je suis un <strong>développeur Web </strong>français vivant actuellement près de La Rochelle.<br /> J'ai obtenu mon diplôme de <strong>Concepteur Développeur d'Applications</strong> d'un niveau bac +3/4 en mars 2020 à la suite d'une soutenance à Paris.</p>
                        <p className="home__bio__text__school">
                            J'ai préparé ce diplôme avec l'école <strong>O'clock</strong>, <strong>labélisée Grande Ecole du Numérique</strong> chez qui j'ai effectué deux formations:
                    </p>
                    </Slide>
                    <Slide right>
                        <ul className="home__bio__text__school__li">
                            <li>
                                La formation de <strong>Développeur Web & Mobile</strong> d'une durée de six mois où j'ai acquis les connaissances et les bonnes pratiques pour devenir développeur web et où j'ai aussi effectué un mois de spécialisation pour prendre en main et personnaliser le CMS <strong>Wordpress</strong>.
                            </li>
                            <li>
                                Puis la formation de <strong>Concepteur Développeur d'Applications</strong> d'une durée de <strong>un an</strong> en contrat de professionnalisation avec l'entreprise <strong>E-Wi Télécom</strong> basée à Saint-Jean d'Angely et spécialisée dans les infrastructures Wi-Fi pour les professionnels du tourisme.
                        </li>
                        </ul>
                    </Slide>
                    <Slide left>
                        <p className="home__bio__text__enterprise">
                            C'est dans cette entreprise que j'ai réellement mis en application toutes les notions apprises en formation que ce soit du développement de <strong>Web Apps</strong> ou de la <strong>gestion de projet</strong>.
                        </p>

                    </Slide>
                </div>
            </div>

        );
    }
}

export default (Bio);

