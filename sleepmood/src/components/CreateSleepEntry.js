import React, { useState, useContext } from 'react';
import { Form } from 'formik';
//import {Context} from './Context/context'
import styled from 'styled-components'
import { FeedUser } from 'semantic-ui-react';

export const CreateSleepEntry = () => {


    const { addSleepEntry } = useState('')
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
    // const EntryWrap = styled.div` // apply to div later if we end up using this
    //     margin: 5%;
    //     h4 {
    //         color: white;
    //     }
    // `;

    // const Form = styled.form`
    //     background-color: #181827;
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: center;
    //     text-align: center;
    //     margin: 5% 0;
    //     h2 {
    //         margin: 5% 0;
    //         color: white;
    //     }
    // `;

    return (
        <div>

            <div className='greeting'>
                <h4>Good Evening, Charlotte</h4>
                <h4>It is hh/mm on dd/mm/yyyy.</h4>
            </div>

            <Form onSubmit={submitSleepEntry} >
                <h2>Create Sleep Entry</h2>
                <input
                    onChange={handleSleepdateChange}
                    placeholder="Sleep Date"
                    value={sleepdate}
                    name="SleepDate"
                />
                <input
                    onChange={handleWakedateChange}
                    placeholder="Wake Date"
                    value={wakedate}
                    name="Wake Date"
                />
                <input
                    onChange={handleSleepmoodChange}
                    placeholder="Sleep Mood"
                    value={sleepmood}
                    name="Sleep Mood"
                />
                <input
                    onChange={handleWakemoodChange}
                    placeholder="Wake Mood"
                    value={wakemood}
                    name="Wake Mood"
                />
                <input
                    onChange={handleAvgmoodChange}
                    placeholder="Average Mood"
                    value={avgmood}
                    name="Average Mood"
                />
                <button>Add Entry</button>
            </Form>
        </div >

    )


}

export default CreateSleepEntry;