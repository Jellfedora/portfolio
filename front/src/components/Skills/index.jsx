import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import angularjs from '../../ressources/images/icons/angularjs.png';
import bootstrap from '../../ressources/images/icons/bootstrap.png';
import cake from '../../ressources/images/icons/cake.png';
import codeigniter from '../../ressources/images/icons/codeigniter.png';
import commandLine from '../../ressources/images/icons/command-line.png';
import css from '../../ressources/images/icons/css3.png';
import git from '../../ressources/images/icons/git.png';
import github from '../../ressources/images/icons/github.png';
import gitlab from '../../ressources/images/icons/gitlab.png';
import html from '../../ressources/images/icons/html-5.png';
import js from '../../ressources/images/icons/javascript.png';
import linux from '../../ressources/images/icons/linux.png';
import mediaQueries from '../../ressources/images/icons/media-queries.png';
import node from '../../ressources/images/icons/nodejs.png';
import mysql from '../../ressources/images/icons/mysql.png';
import php from '../../ressources/images/icons/php.png';
import react from '../../ressources/images/icons/react.png';
import redux from '../../ressources/images/icons/redux.png';
import sass from '../../ressources/images/icons/sass.png';
import symfony from '../../ressources/images/icons/symfony.png';
import w10 from '../../ressources/images/icons/windows-10.png';
import wordpress from '../../ressources/images/icons/wordpress.png';

class Skills extends Component {
    render() {
        return (
            <div className="skills">
                <div className="skills__hard-skills">
                    <Fade top className="skills__hard-skills__front">
                        <div className="skills__hard-skills__front__title">
                            <h4>Front-End</h4>
                        </div>
                        <div className="skills__hard-skills__front__content">
                            <div className="skills__hard-skills__front__content__skill">
                                <img src={html} alt="Html5" />
                                <span>Html5</span>
                            </div>
                            <div className="skills__hard-skills__front__content__skill">
                                <img src={css} alt="Css3" />
                                <span>Css3</span>
                            </div>
                            <div className="skills__hard-skills__front__content__skill">
                                <img src={sass} alt="Sass" />
                                <span>Sass</span>
                            </div>
                            <div className="skills__hard-skills__front__content__skill">
                                <img src={js} alt="Javascript" />
                                <span>Javascript</span>
                            </div>
                            <div className="skills__hard-skills__front__content__skill">
                                <img src={react} alt="React-Jsx" />
                                <span>React & Jsx</span>
                            </div>
                            <div className="skills__hard-skills__front__content__skill">
                                <img src={redux} alt="Redux" />
                                <span>Redux</span>
                            </div>

                            <div className="skills__hard-skills__front__content__skill">
                                <img src={angularjs} alt="AngularJs" />
                                <span>AngularJs</span>
                            </div>
                            <div className="skills__hard-skills__front__content__skill">
                                <img src={bootstrap} alt="Bootstrap" />
                                <span>Bootstrap</span>
                            </div>
                            <div className="skills__hard-skills__front__content__skill">
                                <img src={mediaQueries} alt="Responsive-Design" />
                                <span>Responsive Design</span>
                            </div>
                        </div>
                    </Fade>
                    <div className="portfolio__separator"></div>
                    <Fade bottom className="skills__hard-skills__back">
                        <div className="skills__hard-skills__back__title">
                            <h4>Back-End</h4>
                        </div>
                        <div className="skills__hard-skills__back__content">
                            <div className="skills__hard-skills__back__content__skill">
                                <img src={mysql} alt="Mysql" />
                                <span>Mysql</span>
                            </div>
                            <div className="skills__hard-skills__back__content__skill">
                                <img src={php} alt="Php" />
                                <span>Php</span>
                            </div>
                            <div className="skills__hard-skills__back__content__skill">
                                <img src={symfony} alt="Symfony-Doctrine" />
                                <span>Symfony & Doctrine</span>
                            </div>
                            <div className="skills__hard-skills__back__content__skill">
                                <img src={codeigniter} alt="Codeigniter" />
                                <span>Codeigniter</span>
                            </div>
                            <div className="skills__hard-skills__back__content__skill">
                                <img src={cake} alt="Cakephp" />
                                <span>Cakephp</span>
                            </div>
                            <div className="skills__hard-skills__back__content__skill">
                                <img src={wordpress} alt="Wordpress" />
                                <span>Wordpress</span>
                            </div>
                            <div className="skills__hard-skills__back__content__skill">
                                <img src={node} alt="NodeJs" />
                                <span>NodeJs</span>
                            </div>
                        </div>
                    </Fade>
                    <div className="portfolio__separator"></div>
                    <Fade top className="skills__hard-skills__other">
                        <div className="skills__hard-skills__other__title">
                            <h4>Autres</h4>
                        </div>
                        <div className="skills__hard-skills__other__content">
                            <div className="skills__hard-skills__other__content__skill">
                                <img src={git} alt="git" />
                                <span>Git</span>
                            </div>
                            <div className="skills__hard-skills__other__content__skill">
                                <img src={github} alt="Github" />
                                <span>Github</span>
                            </div>
                            <div className="skills__hard-skills__other__content__skill">
                                <img src={gitlab} alt="Gitlab" />
                                <span>Gitlab</span>
                            </div>
                            <div className="skills__hard-skills__other__content__skill">
                                <img src={commandLine} alt="Administration-systeme" />
                                <span>Administration Systéme</span>
                            </div>
                            <div className="skills__hard-skills__other__content__skill">
                                <img src={linux} alt="Linux" />
                                <span>Linux</span>
                            </div>
                            <div className="skills__hard-skills__other__content__skill">
                                <img src={w10} alt="Windows" />
                                <span>Windows</span>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div >
        )
    }
}
export default (Skills);