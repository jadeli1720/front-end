import React from 'react';
//import {Context} from "./context/context"
import  {axiosWithAuth} from '../utils/axiosWithAuth'
import SleepEntryCard from '/components/SleepEntryCard';
import { Link } from "react-router-dom";


const SleepentryList = ({ sleepentrys, updateSleepentrys}) => {
    console.log(sleepentrys);
    const [editing, setEditing] = useState(false);
    const [sleepentryoEdit, setSleepentryToEdit] = useState(initialSleepentry);

    useEffect(() => { 
        axiosWithAuth()
        .get('https://sleep-mood-db.herokuapp.com/sleep/all')
        .then(res => this.setState({ sleepentrys: res.data }))
        .catch(err => console.log(err.response))
    }, [])

    const editsleepentry = sleepentry => {
        setEditing(true);
        setsleepentryToEdit(sleepentry);
    };
    
    const saveEdit = e => {
        e.preventDefault();
        e.preventDefault()
        axiosWithAuth()
        .put('', sleepentryToEdit)
        .then(res => {
            updateSleepentrys( 
            sleepentrys.map(sleepentry => {
                if (sleepentry.id === sleepentryToEdit.id) return res.data
                else return sleepentry
            })
            )
            setEditing(false)
            setsleepentryToEdit(initialSleepentry)
        })
        .catch(err => console.log(err))
    };
    
    const deleteSleepentry = (sleepentry, e) => {
        e.stopPropagation()
        axiosWithAuth()
        .delete('')
        .then(res => {
            updateSleepentrys(sleepentrys.filter(sleepentryCheck => sleepentryCheck.id !== res.data)) 
        })
        .catch(err => console.log(err))
   };

render() {
    return (
        <div className="sleepentrylist">
            {this.state.sleepentrys.map(sleepentry => (
            <SleepEntryDetails key={sleepentry.id} />
            ))}
        </div>
        );
    }
    }
    
    function SleepEntryDetails({ sleepentry }) {
    return (
        <Link to={'/'}>
        <SleepEntryCard sleepentry={sleepentry} />
        </Link>
    );
}
    
    