import React from "react"
import jeremyImage from './assets/image-jeremy.png'

const Person = () => {
    return (
        <div className='person-info'>
            <div className='person-part'>
                <img src={jeremyImage} alt="image-jeremy" id='jeremy' />
                <p>Report for</p>
                <span className='name'>Jeremy Robson</span>
            </div>

            <div>
                <span>Daily</span>
                <span>Weekly</span>
                <span>Mothly</span>
            </div>
        </div>
    );
}

const timeTrack = () => {
    return (
        <div>

        </div>
    );
}

export { Person, timeTrack };
