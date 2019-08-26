import React, { useState } from 'react';


const CreateSleepEntry = () => {
    const [addSleepEntry] = useState ('')
    const [day, setDay] = useState ('')
    const [hours, setHours] = useState ('')

    const handleDayChange = e => {
        setDay(e.target.value);
    };

    const handleHoursChange = e => {
        setHours(e.target.value);
    };

    const submitSleepEntry = e => {
    e.preventDefault();
    addSleepEntry(e, day, hours);
    // setDay(‘’);
    // setHours(‘’)
    };
    
    return (
      <div>
        <form onSubmit={submitSleepEntry}>
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
        </form>
      </div>

    ) 


}

export default CreateSleepEntry;