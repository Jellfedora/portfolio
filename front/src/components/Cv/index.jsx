import React, { Component } from 'react';
import CvDownloadModal from '../CvDownloadModal';
import Slide from 'react-reveal/Slide';
class Cv extends Component {
    render() {
        return (
            <div className="home__cv">
                <h2 className="home__cv__title" id="cv-title">
                    Statut: Recherche d'emploi
                        </h2>
                <div className="home__cv__text">
                    <Slide top>
                        <p>
                            Je suis actuellement en <strong>recherche d'emploi</strong> et je recherche un poste orienté <strong>front-end</strong> avec la librairie React et le gestionnaire d'état Redux dans le secteur <strong>Toulousain/Tarnais</strong>.<br />
                            Néammoins je suis aussi formé et j'ai plaisir à travailler et approfondir ma maitrise sur du <strong>back-end</strong> avec les frameworks Symfony, Codeigniter et CakePHP.
                            En entreprise j'ai souvent travaillé sur des projets utilisant <strong>jQuery et angularJs</strong> pour le front-end et <strong>CakePHP et CodeIgniter</strong> pour le back-end.
                            Enfin, étant toujours en soif de me former, j'aurais plaisir à apprendre à maitriser n'importe quel outils n'étant pas encore dans mes cordes!
                        </p>
                    </Slide>
                    <Slide bottom>
                        <p style={{ marginTop: '1em' }}>
                            Si vous êtes intéréssé par mon profil pour renforcer votre équipe, voiçi ci dessous mon curriculum vitae téléchargeable au format pdf.
                        </p>
                    </Slide>
                </div>
                <CvDownloadModal />
            </div>
        );
    }
}
export default (Cv);

