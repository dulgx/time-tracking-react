import React from "react"
import jeremyImage from './assets/image-jeremy.png';
import iconEllipsis from './assets/icon-ellipsis.svg';
import iconExercise from './assets/icon-exercise.svg'; // Corrected file path
import iconPlay from './assets/icon-play.svg';
import iconSelfcare from './assets/icon-self-care.svg';
import iconSocial from './assets/icon-social.svg';
import iconStudy from './assets/icon-study.svg';
import iconWork from './assets/icon-work.svg';




const Person = () => {
    return (
        <div className='person-info'>
            <div className='person-part'>
                <img src={jeremyImage} alt="image-jeremy" id='jeremy' />
                <p>Report for</p>
                <span className='name'>Jeremy Robson</span>
            </div>

            <div className="weeks">
                <span>Daily</span>
                <span>Weekly</span>
                <span>Mothly</span>
            </div>
        </div>
    );
}

const TimeTrack = () => {
    return (
        <div className="tasks">
            <div className="task-grid work">
                <img src={iconWork} alt="work-icon" />
                <div className="node-task">
                    <span>Work</span>
                    <span>···</span>
                    <h1>32hrs</h1>
                    <p>Last week - 36hrs</p>
                </div>
            </div>
            <div className="task-grid play">
                <img src={iconPlay} alt="play-icon" />
                <div className="node-task">
                    <span>Play</span>
                    <span>···</span>
                    <h1>10hrs</h1>
                    <p>Last week - 8hrs</p>
                </div>
            </div>
            <div className="task-grid study">
                <img src={iconStudy} alt="study-icon" />
                <div className="node-task">
                    <span>Study</span>
                    <span>···</span>
                    <h1>4hrs</h1>
                    <p>Last week - 7hrs</p>
                </div>
            </div>
            <div className="task-grid exercise">
                <img src={iconExercise} alt="exercise-icon" />
                <div className="node-task">
                    <span>Exercise</span>
                    <span>···</span>
                    <h1>4hrs</h1>
                    <p>Last week - 5hrs</p>
                </div>
            </div>
            <div className="task-grid social">
                <img src={iconSocial} alt="social-icon" />
                <div className="node-task">
                    <span>Social</span>
                    <span>···</span>
                    <h1>5hrs</h1>
                    <p>Last week - 10hrs</p>
                </div>
            </div>
            <div className="task-grid selfcare">
                <img src={iconSelfcare} alt="selfcare-icon" />
                <div className="node-task">
                    <span>Self Care</span>
                    <span>···</span>
                    <h1>2hrs</h1>
                    <p>Last week - 2hrs</p>
                </div>
            </div>
        </div>
    );
}

export { Person, TimeTrack };
