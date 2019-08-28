import React, {useState, useEffect} from 'react';
import { Calendar, momentLocalizer, Views  } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';//needs to go in sass

import { axiosWithAuth } from '../../utils/axiosWithAuth';
import events from './events'

const localizer = momentLocalizer(moment);

//colors: lightPink-#E3CEC9, darkerPink-#A46456, darkBlue-#191D37 

const MyBigCalendar = (props) => {
const [data, setData] = useState([])


const getEvents = () => {
   axiosWithAuth().get(`/sleep/month/${2019}/${7}`)
   .then(res => {
     console.log(res.data)
    setData( res.data.map(e => {
      return {
        id: e.id,
        title: "Sleep",
        start: new Date(e.wakedate[0], e.wakedate[1]-1, e.wakedate[2]),
        end: new Date(e.wakedate[0], e.wakedate[1]-1, e.wakedate[2])
      }
    }))
     console.log('Success', data)})
   .catch(err => console.log('Error', err.response))
}

useEffect(() => {
  
  return getEvents()
}, [])


  // console.log(Views)
  return (
    <div style={{ height: 350 }}>
      <Calendar
        localizer={localizer}
        toolbar={true}
        events={data}//has filter method 
        step={30}
        views={['month']}
        defaultDate={new Date(2019, 7, 0)}
        components={{
          
        }}
      />
      {console.log(events)}
    </div>
  )
}

export default MyBigCalendar
