import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageMasonry from 'react-image-masonry';
import LogeMeImg from '../../ressources/images/portfolio/loge-me.png';
import OArena from '../../ressources/images/portfolio/e-sport-arena.png';
import Sith from '../../ressources/images/portfolio/sith.png';
import ReactRedux from '../../ressources/images/portfolio/react_redux.png';
import MejHome from '../../ressources/images/portfolio/mej-home.jpg';
import MaVitrine from '../../ressources/images/portfolio/work-in-progress.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Zoom from 'react-reveal/Zoom';
class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProject: null,
            reveal: 0
        };
    }

    changeSelectedProject = (index) => {
        this.setState({ selectedProject: index, reveal: this.state.reveal + 1 });
    }

    render() {
        const portfolioContent =
            [
                {
                    'title': 'Loge Me',
                    'text': 'Site immobilier incluant un systéme de notation réalisé en solo avec React / Redux pour le Front End et Symfony 4 en tant que Rest API. C\'est ce projet qui a été présenté lors de ma soutenance au diplôme de Concepteur Développeur D\'applications et qui m\'a permit d\'obtenir mon diplôme.',
                    'imageUrls': LogeMeImg,
                    'alt': 'loge-me-photography',
                    'linkTitle': 'Lien Github de mon projet Loge Me',
                    'githubLink': 'https://github.com/Jellfedora/Loge-Me-Project'
                },
                {
                    'title': 'SITH',
                    'text': 'Web App permettant d\'administrer et de lire des films ou musiques hébergés sur un serveur personnel à partir de n\'importe quel support. J\'ai construit ce projet avec pour le Back-end Node Js et Express et pour le Front-end React et Redux. Je me suis inspiré des sites Plex, Netflix et Spotify pour réaliser ce projet.',
                    'imageUrls': Sith,
                    'alt': 'sith-photography',
                    'linkTitle': 'Lien Github de mon projet SITH',
                    'githubLink': 'https://github.com/Jellfedora/sith'
                },
                {
                    'title': 'MEJ Home / Ma Val de Poche',
                    'text': 'Projet fait avec l\'outil Expo puis avec Symfony en Back-end qui m\'a permit de réaliser une petite application android permettant le suivi de ma fille à sa naissance ainsi qu\'une liste de course pour ma compagne et moi même.',
                    'imageUrls': MejHome,
                    'alt': 'react_redux-photography',
                    'linkTitle': 'Lien Github de mon projet MEJ Home',
                    'githubLink': 'https://github.com/Jellfedora/MEJ-Home'
                },
                {
                    'title': 'oArena',
                    'text': 'Projet réalisé en duo et avec le Cms Wordpress afin de créer le site d\'actualité et la boutique d\'une aréne e-sport pour le projet de fin d\'étude du socle avec l\'école O\'Clock.Le théme et les plugins ont tous étés réalisés par nos soins.',
                    'imageUrls': OArena,
                    'alt': 'oarena-photography',
                    'linkTitle': 'Lien Github de mon projet E-Sport Arena',
                    'githubLink': 'https://github.com/Jellfedora/Project-E-Sport-Arena'
                },
                {
                    'title': 'Ma Vitrine Web',
                    'text': 'Projet en cours de réalisation, celui ci consiste en un Cms léger et dynamique réalisé avec React/Redux et Symfony',
                    'imageUrls': MaVitrine,
                    'alt': 'work-in-progress-photography',
                    'linkTitle': 'Lien Github de mon projet Ma Vitrine Web',
                    'githubLink': 'https://github.com/Jellfedora/ma-vitrine-web'
                },
                {
                    'title': 'REACT&REDUX SKELETON APP',
                    'text': 'Petit projet permettant d\'initialiser en une commande une application basé sur create react app avec configuration minimale pour redux, sass et fontawesome',
                    'imageUrls': ReactRedux,
                    'alt': 'react_redux-photography',
                    'linkTitle': 'Lien Github de mon projet REACT&REDUX SKELETON APP',
                    'githubLink': 'https://github.com/Jellfedora/react-redux-skeleton'
                },
            ]
            ;

        return (
            <div className="portfolio">
                <ImageMasonry
                    numCols={this.props.deviceIsLarge ? 3 : 2}
                    containerWidth={this.props.deviceIsLarge ? '60%' : '100%'}
                >
                    {portfolioContent.map((item, i) => {
                        return (
                            <div
                                key={i}
                                className={this.state.selectedProject !== null ? 'portfolio__selected' : 'portfolio__noSelected'}
                                onMouseEnter={() => this.changeSelectedProject(i)}
                            >
                                <img
                                    src={item.imageUrls}
                                    alt={item.alt} />
                            </div>
                        )
                    })}



                </ImageMasonry>
                {this.state.selectedProject === null
                    ? <div className="portfolio__explanations">
                        <p className="blink">
                            {this.props.deviceIsLarge
                                ? <span>Survolez </span>
                                : <span style={{ fontSize: '1em' }}>Cliquez sur </span>
                            }
                             une image pour obtenir le descriptif du projet.<br />
                            <small className="portfolio__explanations__small">(Bien entendu les projets réalisés en entreprises ne sont pas présents içi <span role='img' aria-label="Smiley clin d'oeil">&#128521;</span>)</small>
                        </p>
                    </div>
                    : <Zoom top spy={this.state.reveal} appear>
                        <div className="portfolio__description">

                            <h3 className="portfolio__description__title">{portfolioContent[this.state.selectedProject].title}</h3>
                            <p className="portfolio__description__text">
                                {portfolioContent[this.state.selectedProject].text}
                            </p>
                            <a className="portfolio__description__link" href={portfolioContent[this.state.selectedProject].githubLink} title={portfolioContent[this.state.selectedProject].linkTitle}>
                                <FontAwesomeIcon icon={['fab', 'github']} className="portfolio__description__link__icon" /> Répertoire du projet
                        </a>
                        </div>
                    </Zoom>
                }

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
        deviceIsLarge: state.navigation.deviceIsLarge,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);