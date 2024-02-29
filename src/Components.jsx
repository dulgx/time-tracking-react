import React from "react";
import './App.css'
import jeremyImage from './assets/image-jeremy.png';
import iconEllipsis from './assets/icon-ellipsis.svg';
import iconExercise from './assets/icon-exercise.svg'; // Corrected file path
import iconPlay from './assets/icon-play.svg';
import iconSelfcare from './assets/icon-self-care.svg';
import iconSocial from './assets/icon-social.svg';
import iconStudy from './assets/icon-study.svg';
import iconWork from './assets/icon-work.svg';
import GoogleFont from 'react-google-fonts';




const Person = () => {
    return (
        <>
            <div className='person-info'>
                <div className='person-part'>
                    <img src={jeremyImage} alt="image-jeremy" id='jeremy' />
                    <div>
                        <p>Report for</p>
                        <span className='name'>Jeremy Robson</span>
                    </div>

                </div>

                <div className="weeks">
                    <p>Daily</p>
                    <p>Weekly</p>
                    <p>Mothly</p>
                </div>
            </div></>
    );
}

const TimeTrack = () => {
    return (
        <div className="tasks">
            <div className="task-grid work" >
                <div id="image">
                    <img src={iconWork} alt="work-icon" className="icon" />
                </div>

                <div className="node-task">
                    <div className="text">
                        <p>Work</p>
                        <span>···</span>
                    </div>

                    <h1>32hrs</h1>
                    <p className="lastweek">Last week - 36hrs</p>
                </div>
            </div>
            <div className="task-grid play">
                <div id="image">
                    <img src={iconPlay} alt="play-icon" className="icon play-icon" />
                </div>

                <div className="node-task">
                    <div className="text">
                        <p>Play</p>
                        <span>···</span>
                    </div>

                    <h1>10hrs</h1>
                    <p className="lastweek">Last week - 8hrs</p>
                </div>
            </div>
            <div className="task-grid study">
                <div id="image">
                    <img src={iconStudy} alt="study-icon" className="study-icon icon" />
                </div>

                <div className="node-task">
                    <div className="text">
                        <p>Study</p>
                        <span>···</span>
                    </div>
                    <h1>4hrs</h1>
                    <p className="lastweek">Last week - 7hrs</p>
                </div>
            </div>
            <div className="task-grid exercise">
                <div id="image">
                    <img src={iconExercise} alt="exercise-icon" className="exercise-icon icon" />
                </div>
                <div className="node-task">
                    <div className="text">
                        <p>Exercise</p>
                        <span>···</span>
                    </div>
                    <h1>4hrs</h1>
                    <p className="lastweek">Last week - 5hrs</p>
                </div>
            </div>
            <div className="task-grid social">
                <div id="image">
                    <img src={iconSocial} alt="social-icon" className="social-icon icon" />
                </div>

                <div className="node-task">
                    <div className="text">
                        <p>Social</p>
                        <span>···</span>
                    </div>
                    <h1>5hrs</h1>
                    <p className="lastweek">Last week - 10hrs</p>
                </div>
            </div>
            <div className="task-grid selfcare">
                <div id="image">
                    <img src={iconSelfcare} alt="selfcare-icon" className="selfcare-icon icon" />
                </div>

                <div className="node-task">
                    <div className="text">
                        <p>Self Care</p>
                        <span>···</span>
                    </div>
                    <h1>2hrs</h1>
                    <p className="lastweek">Last week - 2hrs</p>
                </div>
            </div>
        </div>
    );
}

export { Person, TimeTrack };
