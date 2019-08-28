import React, { useState} from 'react';
import { Form } from 'formik';
// import {Context} from './Context/context'


export const CreateSleepEntry = () => {
    //const {addSleepEntry} = useContext(Context)
    const [day, setDay] = useState('')
    const [hours, setHours] = useState('')

    const handleDayChange = e => {
        setDay(e.target.value);
    };

    const handleHoursChange = e => {
        setHours(e.target.value);
    };

    const submitSleepEntry = e => {
    e.preventDefault();
    //addSleepEntry(e, day, hours);
    setDay('');
    setHours('');
    };
    
    return (
    <div>
        <Form onSubmit={submitSleepEntry}>
            <h2>Add Sleep Entry</h2>
        <input 
            onChange={handleDayChange}
            placeholder = "Day"
            value={day}
            name="Day"
            />
        <input 
            onChange={handleHoursChange}
            placeholder = "Hours"
            value={hours}
            name="Hours"
            />
            <button>Add Entry</button> 
        </Form>
    </div>

    ) 


}

export default CreateSleepEntry;