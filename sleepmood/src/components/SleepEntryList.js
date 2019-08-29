import React, { useState, useEffect } from "react";
//import {Context} from "./context/context"
import { axiosWithAuth } from "../utils/axiosWithAuth";
import SleepEntryCard from "./SleepEntryCard";


const SleepEntryList = (props) => {
  const [sleepentrys, setSleepentrys] = useState([])
  // const [editing, setEditing] = useState(false);
  // const [sleepentryToEdit, setSleepentryToEdit] = useState({});


   const toAxios = (id) => {
    axiosWithAuth()
      .get(`/sleep/id/${id}`)
      .then(res => {
        const sd = res.data;
        setSleepentrys(sd)
        console.log('success',sd)
      })
      .catch(err => console.log('Oops', err.respond))
  }

  useEffect(() => {
    const url = props.match.url;  // navigate here
    const id = props.location.pathname.replace(`${url}/`, "")
    if (id !== "") {
      return toAxios(id);
    }
  }, []);

  
  return (
    <div className="card-container">
      <SleepEntryCard entry={sleepentrys} />
    </div>
  )
};
export default SleepEntryList;



 // useEffect(() => {
  //   axiosWithAuth()
  //     .get("https://sleep-mood-db.herokuapp.com/sleep/all")
  //     .then(res => this.setState({ sleepentrys: res.data }))
  //     .catch(err => console.log(err.response));
  // }, []);

  // const editsleepentry = sleepentry => {
  //   setEditing(true);
  //   setSleepentryToEdit(sleepentry);
  // };

  // const saveEdit = e => {
  //   e.preventDefault();
  //   e.preventDefault();
  //   axiosWithAuth()
  //     .put("https://sleep-mood-db.herokuapp.com/", sleepentryToEdit)
  //     .then(res => {
  //       updateSleepentrys(
  //         sleepentrys.map(sleepentry => {
  //           if (sleepentry.id === sleepentryToEdit.id) return res.data;
  //           else return sleepentry;
  //         })
  //       );
  //       setEditing(false);
  //       setSleepentryToEdit({});
  //     })
  //     .catch(err => console.log(err));
  // };

  // const deleteSleepentry = (sleepentry, e) => {
  //   e.stopPropagation();
  //   axiosWithAuth()
  //     .delete("https://sleep-mood-db.herokuapp.com/")
  //     .then(res => {
  //       updateSleepentrys(
  //         sleepentrys.filter(sleepentryCheck => sleepentryCheck.id !== res.data)
  //       );
  //     })
  //     .catch(err => console.log(err));
  // };

  // const toAxios = (id) => {
//     axiosWithAuth()
//       .get(`/sleep/id/${id}`)
//       .then(res => {
//         const sd = res.data;
//         // setSleepdate(sd.sleepdate);
//         // setWakedate(sd.wakedate);
//         // setSleepmood(sd.sleepmood);
//         // setWakemood(sd.wakemood);
//         // setAvgmood(sd.daymood);
//       })
//       .catch(err => console.log('Oops', err.respond))
//   }

//   useEffect(() => {
//     const url = props.match.url;  //  "/CreateSleepEntry"
//     const id = props.location.pathname.replace(`${url}/`, "")
//     if (id !== "") {
//       return toAxios(id);
//     }
//   }, []);