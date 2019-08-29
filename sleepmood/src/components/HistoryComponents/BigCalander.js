import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import { axiosWithAuth } from '../../utils/axiosWithAuth';
// import events from './events'//Dummy data

const localizer = momentLocalizer(moment);



const BigCalendar = (props) => {
  const [data, setData] = useState([])
  // const [sleepEntry, setSleepEntry] = useState([])
  
  //Get dates from server
  const getEvents = () => {
    axiosWithAuth().get(`/sleep/month/${2019}/${7}`)
      .then(res => {
        //Map through server data
        setData(res.data.map(e => {
          //Make an object = big-calender data object
          return {
            id: e.id,
            title: "Sleep",
            start: new Date(e.sleepdate[0], e.sleepdate[1] - 1, e.sleepdate[2]),
            end: new Date(e.wakedate[0], e.wakedate[1] - 1, e.wakedate[2])
          }
        }))
        console.log('Success', res.data)
      })
      .catch(err => console.log('Error', err.response))
  }

  //Display data to render to calendar
  useEffect(() => {
    return getEvents()
  }, [])

 
  return (
      <div style={{ height: 350 }}>
        <Calendar
          localizer={localizer}
          toolbar={true}
          events={data}//has filter method 
          step={30}
          views={['month']}
          defaultDate={new Date(2019, 7, 0)}
          popup
          selectable
          onSelectEvent={props.clicked}
        />
        
      </div>
      
  )
}

export default BigCalendar
