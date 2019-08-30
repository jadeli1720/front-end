import React, {useState, useEffect } from 'react';
import styled from 'styled-components';
import { makeFinishedDiv, wait } from '../helpers';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrinStars, faSmile, faMeh, faSadTear } from '@fortawesome/free-solid-svg-icons';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding-bottom: 20px;
  z-index: 5;
  position: relative;
  
`

const BG = styled.div`
  background: #262731;
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0.6
`

const WhiteSpace = styled.div`
  height: 30px; 
  width: 100%
`

const SleepEntryForm = props => {

  const [bedtimeMood, setBedtimeMood] = useState();
  const [bedtimeMoodColor, setBedtimeMoodColor] = useState(['none', 'none', 'none', 'none']);

  const [waketimeMood, setWaketimeMood] = useState();
  const [waketimeMoodColor, setWaketimeMoodColor] = useState(['none', 'none', 'none', 'none']);

  const [overallDayMood, setOverallDayMood] = useState();
  const [overallDayMoodColor, setOverallDayMoodColor] = useState(['none', 'none', 'none', 'none']);

  const [display, setDisplay] = useState('hidden');

  // const [sleepHour, setSleepHour] = useState();
  // const [sleepMinute, setSleepMinute] = useState();
  // const [sleepDate, setSleepDate] = useState();

  // const [wakeHour, setWakeHour] = useState();
  // const [wakeMinute, setWakeMinute] = useState();
  // const [wakeDate, setWakeDate] = useState();

  const [sleepData, setSleepData] = useState({
    id: undefined,
    sleepHour: undefined,
    sleepMinute: undefined,
    sleepDate: undefined,
    wakeHour: undefined,
    wakeMinute: undefined,
    wakeDate: undefined,
  })

  useEffect(() => {
    const url = props.match.url;  // navigate here
    const id = props.location.pathname.replace(`${url}/update/`, "")
    if (id !== "") {
      return axiosGet(id);
    }
  }, [])

  const applyColor = (index, value, colorArr, colorSetter, moodSetter) => {
    let newColorArr = colorArr.map((color, i) => {
      if (i === index) {
        return '#AEA37E'
      } else {
        return color = '#EFE3E1'
      }
    })
    console.log('newarr', newColorArr)
    colorSetter(newColorArr);
    moodSetter(value);
    console.log('moodsetter', bedtimeMood)
  }

  const handleChange = (e) => {
    setSleepData({
      ...sleepData,
      [e.target.name]: e.target.value
    });
    console.log(e.target.name, ':', e.target.value)
  }

  const axiosGet = (id) => {
    axiosWithAuth()
      .get(`/sleep/id/${id}`)
      .then(res => {
        const sd = res.data;
        setSleepData({
          id: sd.id,
          sleepHour: sd.sleepdate[3],
          sleepMinute: sd.sleepdate[4].length === 1 ? `0${sd.sleepdate[4]}` : sd.sleepdate[4],
          sleepDate: `${sd.sleepdate[1]}/${sd.sleepdate[2]}/${sd.sleepdate[0]}`,
          wakeHour: sd.wakedate[3],
          wakeMinute: sd.wakedate[4].length === 1 ? `0${sd.wakedate[4]}` : sd.wakedate[4],
          wakeDate: `${sd.wakedate[1]}/${sd.wakedate[2]}/${sd.wakedate[0]}`,
        })
        console.log('success',sd)
      })
      .catch(err => console.log('Oops', err.respond))
  }

  const axiosPost = (newSleepData) => {
    axiosWithAuth()
      .post("/sleep/new", newSleepData)
      .then(res => {
        console.log(res.data)
        const arr = makeFinishedDiv("The Sleep Entry\nhas been added.")
        wait(2).then(() => arr[1].remove())
        wait(1.5).then(() => props.history.push("/home"))
      })
      .catch(err => {
        console.log('HERE Opps, Something happened!', err)
      })
  }

  const axiosPut = (newSleepData) => {
    axiosWithAuth()
      .put(`/sleep/update/${newSleepData.id}`, newSleepData)
      .then(res => {
        console.log(res.data)
        const arr = makeFinishedDiv("The Sleep Entry\nhas been updated.")
        wait(2).then(() => arr[1].remove())
        wait(1.5).then(() => props.history.push("/home"))
      })
      .catch(err => {
        console.log('HERE Oops, Something happened!', err)
      })
  }

  const handleSubmit = () => {
    console.log(bedtimeMood, waketimeMood, overallDayMood)
    // const newSleepData = {
    //   sleepdate: [],
    //   wakedate: [],
    //   sleepmood: '',
    //   wakemood: '',
    //   daymood: ''
    // }
    if (sleepData.sleepDate === undefined || sleepData.sleepHour === undefined || 
        sleepData.sleepMinute === undefined || sleepData.wakeHour === undefined || 
        sleepData.wakeMinute === undefined || sleepData.wakeDate === undefined
        || bedtimeMood === undefined || waketimeMood === undefined || overallDayMood === undefined) {
      console.log(sleepData.sleepDate, sleepData.sleepHour, sleepData.sleepMinute, sleepData.wakeHour,
      sleepData.wakeMinute, sleepData.wakeDate)    
      setDisplay('visible');
      setTimeout(() => {
        setDisplay('hidden');
      }, 1000)
    } else {
      // let dateSleep = sleepDate.split('/');
      let sleepYear = sleepData.sleepDate.split('/').reverse()[0];
      let wakeYear = sleepData.wakeDate.split('/').reverse()[0];
      console.log('YEAR', sleepYear)
      const newSleepData = {
        sleepdate: [parseInt(sleepYear), parseInt(sleepData.sleepDate.split('/')[0]), parseInt(sleepData.sleepDate.split('/')[1]),
                    parseInt(sleepData.sleepHour), parseInt(sleepData.sleepMinute)],
        wakedate: [parseInt(wakeYear), parseInt(sleepData.wakeDate.split('/')[0]), parseInt(sleepData.wakeDate.split('/')[1]),
                  parseInt(sleepData.wakeHour), parseInt(sleepData.wakeMinute)],
        sleepmood: bedtimeMood,
        wakemood: waketimeMood,
        daymood: overallDayMood
      }

      console.log('HERE',newSleepData)
      if (sleepData.id) {
        axiosPut(newSleepData)
      } else {
        axiosPost(newSleepData);
      }
    }
  }

  return (
    <div style={{color: '#EFE3E1'}}>
      <h3 style={{margin: '20px 0 0 47px'}}>Good evening, Charlotte.</h3>
      <h3 style={{margin: '10px 0 20px 47px'}}>It is 22:30 on .....</h3>
      
 
      <Card>
        <BG></BG>
        <h1 style={{marginBottom: '60px', marginTop: '30px'}}>Create sleep entry.</h1>

        <div style={{marginBottom: '30px'}}>
          <h3>1. Select Bedtime & Mood</h3>
          <div style={{display: 'flex', justifyContent: 'center', paddingBottom: '15px'}}>
        
          <input name="sleepHour" 
                  style={{width: '50px'}} 
                  type="text"
                  value={sleepData.sleepHour} 
                  placeholder="00"
                  onChange={handleChange}
          />
          <input name="sleepMinute" 
                  style={{width: '50px'}} 
                  type="text"
                  value={sleepData.sleepMinute} 
                  placeholder="00"
                  onChange={handleChange}
          />

          </div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <input placeholder="MM/DD/YYYY" 
                   style={{width: '100px', marginBottom: '15px'}}
                   name="sleepDate"
                   type="text"
                   value={sleepData.sleepDate}
                   onChange={handleChange}
            />
          </div>
          <div style={{display: 'flex', justifyContent: 'center', margin: '0 auto'}}>
            <FontAwesomeIcon onClick={() => applyColor(0, 4, bedtimeMoodColor, setBedtimeMoodColor, setBedtimeMood)} style={{color: `${bedtimeMoodColor[0]}`,width: '35px', height: '35px', margin: '5px', cursor: 'pointer'}} icon={faGrinStars} />
            <FontAwesomeIcon onClick={() => applyColor(1, 3, bedtimeMoodColor, setBedtimeMoodColor, setBedtimeMood)} style={{color: `${bedtimeMoodColor[1]}`, width: '35px', height: '35px', margin: '5px', cursor: 'pointer'}} icon={faSmile} />
            <FontAwesomeIcon onClick={() => applyColor(2, 2, bedtimeMoodColor, setBedtimeMoodColor, setBedtimeMood)} style={{color: `${bedtimeMoodColor[2]}`, width: '35px', height: '35px', margin: '5px', cursor: 'pointer'}} icon={faMeh} />
            <FontAwesomeIcon onClick={() => applyColor(3, 1, bedtimeMoodColor, setBedtimeMoodColor, setBedtimeMood)} style={{color: `${bedtimeMoodColor[3]}`, width: '35px', height: '35px', margin: '5px', cursor: 'pointer'}} icon={faSadTear} />
          </div>
        </div>

        <div style={{marginBottom: '30px'}}>
          <h3>2. Select Waketime & Mood</h3>
          <div style={{display: 'flex', justifyContent: 'center', paddingBottom: '15px'}}>
            <input name="wakeHour" 
                   style={{width: '50px'}} 
                   type="text"
                   value={sleepData.wakeHour} 
                   placeholder="00"
                   onChange={handleChange}
            />
            <input name="wakeMinute" 
                   style={{width: '50px'}} 
                   type="text"
                   value={sleepData.wakeMinute} 
                   placeholder="00"
                   onChange={handleChange}
            />
          </div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <input placeholder="MM/DD/YYYY" 
                   style={{width: '100px', marginBottom: '15px'}}
                   name="wakeDate"
                   type="text"
                   value={sleepData.wakeDate}
                   onChange={handleChange}
            />
          </div>
          <div style={{display: 'flex', justifyContent: 'center', margin: '0 auto'}}>
            <FontAwesomeIcon onClick={() => applyColor(0, 4, waketimeMoodColor, setWaketimeMoodColor, setWaketimeMood)} style={{color: `${waketimeMoodColor[0]}`, width: '35px', height: '35px', margin: '5px', cursor: 'pointer'}} icon={faGrinStars} />
            <FontAwesomeIcon onClick={() => applyColor(1, 3, waketimeMoodColor, setWaketimeMoodColor, setWaketimeMood)} style={{color: `${waketimeMoodColor[1]}`, width: '35px', height: '35px', margin: '5px', cursor: 'pointer'}} icon={faSmile} />
            <FontAwesomeIcon onClick={() => applyColor(2, 2, waketimeMoodColor, setWaketimeMoodColor, setWaketimeMood)} style={{color: `${waketimeMoodColor[2]}`, width: '35px', height: '35px', margin: '5px', cursor: 'pointer'}} icon={faMeh} />
            <FontAwesomeIcon onClick={() => applyColor(3, 1, waketimeMoodColor, setWaketimeMoodColor, setWaketimeMood)} style={{color: `${waketimeMoodColor[3]}`, width: '35px', height: '35px', margin: '5px', cursor: 'pointer'}} icon={faSadTear} />
          </div>
        </div>

        <div style={{marginBottom: '20px'}}>
          <h3>3. Select Overall Mood for Today</h3>
          <div style={{display: 'flex', justifyContent: 'center', margin: '0 auto'}}>
            <FontAwesomeIcon onClick={() => applyColor(0, 4, overallDayMoodColor, setOverallDayMoodColor, setOverallDayMood)} style={{color: `${overallDayMoodColor[0]}`, width: '35px', height: '35px', margin: '5px', cursor: 'pointer'}} icon={faGrinStars} />
            <FontAwesomeIcon onClick={() => applyColor(1, 3, overallDayMoodColor, setOverallDayMoodColor, setOverallDayMood)} style={{color: `${overallDayMoodColor[1]}`, width: '35px', height: '35px', margin: '5px', cursor: 'pointer'}} icon={faSmile} />
            <FontAwesomeIcon onClick={() => applyColor(2, 2, overallDayMoodColor, setOverallDayMoodColor, setOverallDayMood)} style={{color: `${overallDayMoodColor[2]}`, width: '35px', height: '35px', margin: '5px', cursor: 'pointer'}} icon={faMeh} />
            <FontAwesomeIcon onClick={() => applyColor(3, 1, overallDayMoodColor, setOverallDayMoodColor, setOverallDayMood)} style={{color: `${overallDayMoodColor[3]}`, width: '35px', height: '35px', margin: '5px', cursor: 'pointer'}} icon={faSadTear} />
          </div>
        </div>

        <p style={{color: 'red', visibility: `${display}`}}>Please select all fields.</p>
        <button onClick={handleSubmit} style={{color: 'black', marginTop: '40px', width: '160px', 
                        height:'50px', borderRadius: '8px', fontSize: '18px', 
                        fontWeight: '600', background: '#ACB2D8'}}>{sleepData.id ? "Edit" : "Submit"}</button>

      </Card>

      <WhiteSpace></WhiteSpace>
    </div>
  )
}

export default SleepEntryForm;