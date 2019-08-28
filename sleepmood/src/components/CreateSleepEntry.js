import React, { useState, useContext } from 'react';
import { Form } from 'formik';
//import {Context} from './Context/context'


export const CreateSleepEntry = () => {
    const {addSleepEntry} = useState('')
    const [sleepdate, setSleepdate] = useState('')
    const [wakedate, setWakedate] = useState('')
    const [sleepmood, setSleepmood] = useState('')
    const [wakemood, setWakemood] = useState('')
    const [avgmood, setAvgmood] = useState('')

    const handleSleepdateChange = e => {
        setSleepdate(e.target.value);
    };

    const handleWakedateChange = e => {
        setWakedate(e.target.value);
    };
    const handleSleepmoodChange = e => {
        setSleepmood(e.target.value);
    };
    const handleWakemoodChange = e => {
        setWakemood(e.target.value);
    };
    const handleAvgmoodChange = e => {
        setAvgmood(e.target.value);
    };

    const submitSleepEntry = e => {
    e.preventDefault();
    addSleepEntry(e, sleepdate, wakedate, sleepmood, wakemood, avgmood);
    setSleepdate('');
    setWakedate('');
    setSleepmood('');
    setWakemood('');
    setAvgmood('');
    };
    
    return (
    <div>
        <Form onSubmit={submitSleepEntry}>
            <h2>Add Sleep Entry</h2>
        <input 
            onChange={handleSleepdateChange}
            placeholder = "Sleep Date"
            value={sleepdate}
            name="SleepDate"
            />
        <input 
            onChange={handleWakedateChange}
            placeholder = "Wake Date"
            value={wakedate}
            name="Wake Date"
            />
            <input 
            onChange={handleSleepmoodChange}
            placeholder = "Sleep Mood"
            value={sleepmood}
            name="Sleep Mood"
            />
            <input 
            onChange={handleWakemoodChange}
            placeholder = "Wake Mood"
            value={wakemood}
            name="Wake Mood"
            />
            <input 
            onChange={handleAvgmoodChange}
            placeholder = "Average Mood"
            value={avgmood}
            name="Average Mood"
            />
            <button>Add Entry</button> 
        </Form>
    </div>

    ) 


}

export default CreateSleepEntry;