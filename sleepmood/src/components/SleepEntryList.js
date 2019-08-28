import React, {useState, useEffect} from "react";
//import {Context} from "./context/context"
import { axiosWithAuth } from "../utils/axiosWithAuth";
import SleepEntryCard from "./SleepEntryCard";
import { Link } from "react-router-dom";

const SleepEntryList = ({ sleepentrys, updateSleepentrys }) => {
  console.log(sleepentrys);
  const [editing, setEditing] = useState(false);
  const [sleepentryToEdit, setSleepentryToEdit] = useState({});

  useEffect(() => {
    axiosWithAuth()
      .get("https://sleep-mood-db.herokuapp.com/sleep/all")
      .then(res => this.setState({ sleepentrys: res.data }))
      .catch(err => console.log(err.response));
  }, []);

  const editsleepentry = sleepentry => {
    setEditing(true);
    setSleepentryToEdit(sleepentry);
  };

  const saveEdit = e => {
    e.preventDefault();
    e.preventDefault();
    axiosWithAuth()
      .put("https://sleep-mood-db.herokuapp.com/", sleepentryToEdit)
      .then(res => {
        updateSleepentrys(
          sleepentrys.map(sleepentry => {
            if (sleepentry.id === sleepentryToEdit.id) return res.data;
            else return sleepentry;
          })
        );
        setEditing(false);
        setSleepentryToEdit({});
      })
      .catch(err => console.log(err));
  };

  const deleteSleepentry = (sleepentry, e) => {
    e.stopPropagation();
    axiosWithAuth()
      .delete("https://sleep-mood-db.herokuapp.com/")
      .then(res => {
        updateSleepentrys(
          sleepentrys.filter(sleepentryCheck => sleepentryCheck.id !== res.data)
        );
      })
      .catch(err => console.log(err));
  };
};
export default SleepEntryList;
