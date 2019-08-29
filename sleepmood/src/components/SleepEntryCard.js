import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

const SleepEntryCard = ({entry}) => {
console.log('Card', entry)


// const getDate =() => {
//   entry.sleepdate.map(day => {
//      return console.log("Map Sleepdate", day.sleepdate[0])
//   })
// }
  return (
    <div className="SleepEntryCard">
      {/* Figure out how to turn array to sleep date */}
      <h3>{entry.sleepdate}</h3>
      {/* <p>{getDate(entry.sleepdate)}</p> */}
      <div>
        <p>Sleep Mood: {entry.sleepmood} </p>
        <p>Wake Mood: {entry.wakemood} </p>
        <p>Overall Mood: {entry.daymood} </p>
        <div>


        </div>
      </div>

      <div className="buttons">
        <div>
          <Link to={'/'}>
            <button type="button">Edit</button>
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