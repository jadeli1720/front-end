import React from 'react';
import { Link } from 'react-router-dom';
import { makeDateFromArray, getHours } from '../helpers';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import styled from 'styled-components';
import 'react-circular-progressbar/dist/styles.css';

const CircleWrap = styled.div`
  width: 20%; 
  margin: 30px;
`
const RowWrap = styled.div`
  display: flex;
  justify-content: center;
`
const Text = styled.p`
  text-align: center; 
  font-size: 16px;
  font-weight: 600;
  white-space:nowrap;
  color: #EFE3E1
`

const SleepEntryCard = ({ entry }) => {
  console.log('Card', entry)

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  if (!entry.sleepdate) {
    return <div />
  }

  const sleepDate = makeDateFromArray(entry.sleepdate);
  const wakeDate = makeDateFromArray(entry.wakedate);
  const totalHoursSlept = getHours(sleepDate, wakeDate);
  console.log("Total Hours\n", totalHoursSlept)

  const sleep = {
    year: entry.sleepdate[0],
    month: monthNames[entry.sleepdate[1] - 1],
    day: entry.sleepdate[2],
    hour: entry.sleepdate[3].length === 1 ? `0${entry.sleepdate[3]}` : entry.sleepdate[3],
    minute: entry.sleepdate[4].length === 1 ? `0${entry.sleepdate[4]}` : entry.sleepdate[4],
  }
  const wake = {
    year: entry.wakedate[0],
    month: monthNames[entry.wakedate[1] - 1],
    day: entry.wakedate[2],
    hour: entry.wakedate[3].length === 1 ? `0${entry.wakedate[3]}` : entry.wakedate[3],
    minute: entry.wakedate[4].length === 1 ? `0${entry.wakedate[4]}` : entry.wakedate[4]
  }

  return (
    <div className="SleepEntryCard">
      {/* Figure out how to turn array to sleep date */}
      <h3>{sleep.month} {sleep.day}, {sleep.year} - {wake.month} {wake.day}, {wake.year}</h3>
      {/* <p>{getDate(entry.sleepdate)}</p> */}
      <div className="bed-and-sleep">
        <div className="titles">
          <h4>Bedtime:</h4>
          <h4>Waketime:</h4>
          <h4>Overall mood:</h4>
        </div>
        <div className="times">
          <h4>{sleep.hour + sleep.minute}</h4>
          <h4>{wake.hour + wake.minute}</h4>
          <h4>{""}</h4>
        </div>
        <div className="emojis">
          <h4></h4>
        </div>
        <div className='total-bed'>
          <h4>Total hours in bed</h4>
        </div>
        <div>
          <CircleWrap>
            <Text>Average Mood</Text>
            <div style={{ background: '#F4F4F6', borderRadius: '50%' }}>
              <CircularProgressbar
                styles={buildStyles({
                  textSize: '25px',
                  textColor: '#191D37',
                  pathColor: '#93875C',
                  trailColor: '#F4F4F6'})}
              // value={averageMood} text={`${averageMood}`} maxValue={4}
              />
            </div>
          </CircleWrap>
        </div>

      </div> {/* bed-and-sleep */}

      <div className="buttons">
        <div>
          <Link to={'/'}>
            <button type="button">Edit</button>
          </Link>
          <Link to={`/CreateSleepEntry/${entry.id}`}>
            <button type="button">Delete</button>
          </Link>
        </div>
      </div>
    </div>

  );
};
export default SleepEntryCard;