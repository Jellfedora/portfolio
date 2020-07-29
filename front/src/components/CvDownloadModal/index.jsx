import React, { Component } from 'react';
import JulienCvPdf from '../../ressources/documents/cv-2020.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactGA from 'react-ga';
class CvDownloadModal extends Component {

    downloadCv = () => {
        ReactGA.event({
            category: "Download Cv",
            action: "User download my cv",
        });
    }

    render() {
        return (
            <div className="cv-download-modal ">
                <a href={JulienCvPdf} download="cv-lecointe-julien-2020"><FontAwesomeIcon icon="download" className="cv-download-modal__icon blink" title="Mon cv au format pdf" onClick={this.downloadCv} /></a>
            </div>
        )
    }
}
export default (CvDownloadModal);