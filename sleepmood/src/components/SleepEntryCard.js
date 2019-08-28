import React from 'react';
import {Link} from 'react-router-dom';

const SleepEntryCard = props => {
    const {sleepdate,wakedate,sleephours, wakehours, avgmood}
    return (
        <div className = "SleepEntryCard">
            <h3></h3>
    
    <div className="buttons">
    <div>
    <Link to={'/'}>
    <button type="button">Update</button>
    </Link>
    <Link to={'/'}>
    <button type="button">Delete</button>
    </Link>
    </div>
    </div>
  </div>

    );
};
export default SleepEntryCard;