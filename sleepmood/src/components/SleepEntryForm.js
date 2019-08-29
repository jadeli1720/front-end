import React, {useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrinStars, faSmile, faMeh, faSadTear } from '@fortawesome/free-solid-svg-icons';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding-bottom: 20px
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

const SleepEntryForm = () => {

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
    sleepHour: undefined,
    sleepMinute: undefined,
    sleepDate: undefined,
    wakeHour: undefined,
    wakeMinute: undefined,
    wakeDate: undefined,
  })

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
    setSleepData({[e.target.name]: e.target.value})
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
    if (sleepData.sleepDate === undefined && sleepData.sleepHour === undefined && 
        sleepData.sleepMinute === undefined && sleepData.wakeHour === undefined && 
        sleepData.wakeMinute === undefined && sleepData.wakeDate === undefined) {
      setDisplay('visible');
      setTimeout(() => {
        setDisplay('hidden');
      }, 1000)
    } else {
      // let dateSleep = sleepDate.split('/');

      const newSleepData = {
        sleepdate: [],
        wakedate: [],
        sleepmood: '',
        wakemood: '',
        daymood: ''
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
        
          <input name="sleephour" 
                  style={{width: '50px'}} 
                  value={sleepData.sleepHour} 
                  placeholder="00"
                  onChange={handleChange}
          />
          <input name="sleepminute" 
                  style={{width: '50px'}} 
                  value={sleepData.sleepMinute} 
                  placeholder="00"
                  onChange={handleChange}
          />

          </div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <input placeholder="MM/DD/YYYY" 
                   style={{width: '100px', marginBottom: '15px'}}
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
            <input name="wakehour" 
                   style={{width: '50px'}} 
                   value={sleepData.wakeHour} 
                   placeholder="00"
                   onChange={handleChange}
            />
            <input name="wakeminutes" 
                   style={{width: '50px'}} 
                   value={sleepData.wakeMinute} 
                   placeholder="00"
                   onChange={handleChange}
            />
          </div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <input placeholder="MM/DD/YYYY" 
                   style={{width: '100px', marginBottom: '15px'}}
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
                        fontWeight: '600', background: '#ACB2D8'}}>Submit</button>

      </Card>

      <WhiteSpace></WhiteSpace>
    </div>
  )
}

export default SleepEntryForm;