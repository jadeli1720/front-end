import React from 'react';
import {Context } from "./context/context"


const EntryList = ({ entrys, UpdateEntrys}) => {
    const {sleepentrys} = useState('')
    const [editing, setEditing] = useState(false);
    const [ToEdit, setEntryToEdit] = useState(initialentry);
}
return (
    sleepentrys.map (sleepentry => {
        <div>
            <h2>{props.sleepentry.date}</h2>
            <h3>{props.sleepentry.hours}</h3>

        </div>
    }

    ))

    