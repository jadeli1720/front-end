import React from 'react';
//import {Context} from "./context/context"
import axioswithAuth from './utils/axioswithAuth';

;
export default class SleepEntryList extends Component {
    constructor(props) {
        super(props);
        this.state ={
            sleepentrys: []
        };
    }

    componentDidMount(){
        axiosWithAuth
        .get()
        .then()
        .catch(err => console.log(err.response));
    }

render(){
    // render() {
    // return (
    //     <div className="sleepentrylist">
    //         {this.state.sleepentrys.map(sleepentry => (
    //         <SleepEntryDetails key={} />
    //         ))}
    //     </div>
    //     );
    // }
    // }
    
    // function SleepEntryDetails({ sleepentry }) {
    return (
        <Link to={'/'}>
        <SleepEntryCard sleepentry={sleepentry} />
        </Link>
    )
    // }
  }
}
    
  
    