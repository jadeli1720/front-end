import React, { useState, useEffect } from 'react';
import '../../node_modules/react-vis/dist/style.css';
import  { HorizontalGridLines,
  VerticalGridLines,
  VerticalBarSeries,
  XAxis,
  YAxis,
  XYPlot,
  LineMarkSeries, LineSeries } from 'react-vis';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const CircleWrap = styled.div`
  width: 20%; 
  margin: 30px;
`

const RowWrap = styled.div`
  display: flex;
  justify-content: center;
`
const Text = styled.p`
  text-align: center; 
  font-size: 16px;
  font-weight: 600;
  white-space:nowrap;
  color: #EFE3E1
`

const WhiteSpace = styled.div`
  height: 30px; 
  width: 100%
`

const CalendarWrap = styled.div`
  display: flex; 
  justify-content: center
`

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const Home = () => {
  const [xAxisValues, setXAxisValues] = useState([]);
  const [date, setDate] = useState(new Date());
  const [graphData, setGraphData] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [longestSleep, setLongestSleep] = useState('');
  const [shortestSleep, setShortestSleep] = useState('');
  const [averageMood, setAverageMood] = useState('');
  const [averageSleep, setAverageSleep] = useState('');
  const [recommendedSleep, setRecommendedSleep] = useState('');

  useEffect(() => {
    
    axiosWithAuth()
    .get('/sleep/all')
    .then(res => {
      let arr = res.data;
      console.log(arr)
      let storage = {};
      arr.forEach(item => {
        let md = [item.sleepdate[1], item.sleepdate[2]].join(' ');
        let year = [item.sleepdate[0]].toString();
        let time = [item.sleepdate[3], item.sleepdate[4]].join(':');
        let start = new Date(md + ', ' + year + ' ' + time);

        let md2 = [item.wakedate[1], item.wakedate[2]].join(' ');
        let year2 = [item.wakedate[0]].toString();
        let time2 = [item.wakedate[3], item.wakedate[4]].join(':');
        let finish = new Date(md2 + ', ' + year2 + ' ' + time2);

        let hours = getHours(start, finish);
        if (storage[hours]) {
          storage[hours].push(Math.round((item.sleepmood + item.wakemood + item.daymood) / 3));
        } else {
          storage[hours] = [Math.round((item.sleepmood + item.wakemood + item.daymood) / 3)];
        }
      })

      let max = [0, 0];
      for (let key in storage) {
        if (storage[key].length > 1) {
          let avg = storage[key].reduce((acc, val) => {return acc += val}, 0) / storage[key].length;
          console.log('AVG', avg, 'Hour', key)
          if (avg > max[0]) {
            max[0] = avg;
            max[1] = key;
          }
        }
      }
      console.log(storage)
      setRecommendedSleep(max[1]);

      let slice = arr.slice(arr.length - 7);

      let xAxis = slice.map(item => {
        return item.wakedate[2];
      })

      let hoursArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      let obj = {};
      let userHours = [];
      let moods = [];
      

      let graph = slice.map((item, index) => {

        let md = [item.sleepdate[1], item.sleepdate[2]].join(' ');
        let year = [item.sleepdate[0]].toString();
        let time = [item.sleepdate[3], item.sleepdate[4]].join(':');
        let start = new Date(md + ', ' + year + ' ' + time);

        let md2 = [item.wakedate[1], item.wakedate[2]].join(' ');
        let year2 = [item.wakedate[0]].toString();
        let time2 = [item.wakedate[3], item.wakedate[4]].join(':');
        let finish = new Date(md2 + ', ' + year2 + ' ' + time2);

        if (index === 0) {
          setStartDate((finish.getMonth() + 1) + '/' + finish.getDate());
        }

        if (index === slice.length - 1) {
          setEndDate((finish.getMonth() + 1) + '/' + finish.getDate());
        }

        let hours = getHours(start, finish);
        userHours.push(hours);
        let moodAvr = (item.sleepmood + item.wakemood + item.daymood) / 3;
        moods.push(moodAvr);

        if (!obj[hours]) {
          obj[hours] = 0;
        } 
        return {x: item.wakedate[2], y: hours}
      })

      hoursArr.forEach(num => {
        if (!obj[num]) {
          graph.push({y: num})
        }
      })
      
      let sortedUserHours = userHours.sort((a, b) => a - b);
      let avrSleep = Math.round(userHours.reduce((acc, val) => {return acc += val}, 0) / userHours.length);
      let avgWeekMood = Math.round(moods.reduce((acc, val) => {return acc += val}, 0) / moods.length);

      setXAxisValues(xAxis);
      setGraphData(graph);
      setLongestSleep(sortedUserHours[userHours.length - 1]);
      setShortestSleep(sortedUserHours[0]);
      setAverageSleep(avrSleep);
      setAverageMood(avgWeekMood);
    })
    .catch(err => {
      console.log('HERE Opps, Something happened!', err)
    }) 
  }, [])

  const getHours = (start, finish) => {
    let diff = (finish.getTime() - start.getTime()) / 1000;
    diff /= (60 * 60);
    if (diff > 12) {diff = 12}
    return Math.abs(Math.round(diff));
  }

  const handleChange = (date) => {
    console.log([date, new Date('August 13, 2019')])

    setDate(date);
  }

  const handleCalendarDateClick = () => {
    console.log('HERE click', date)
  }

  return (
    <div style={{margin: '10px', display: 'flex', flexDirection: 'column'}}>
      <h3 style={{marginLeft: '30px', color: '#D0C9B4', marginTop: '20px'}}>Your sleep history for the week.</h3>
      <div>
        <XYPlot height={300} width={470}>
          <XAxis tickValues={xAxisValues} tickFormat={v =>  v * 1} style={{
            // line: {stroke: '#F5F4EF', width: '4px'},
            // ticks: {stroke: 'blue', strokeWidth: '4px'},
            text: {stroke: 'none', fill: '#F5F4EF', fontWeight: 600}
          }}/>
          <YAxis tickValues={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]} tickTotal={12} style={{
            // line: {stroke: '#F5F4EF', width: '4px'},
            // ticks: {stroke: 'blue', strokeWidth: '4px'},
            text: {stroke: 'none', fill: '#F5F4EF', fontWeight: 600}
          }}/>
          <HorizontalGridLines style={{backgroundColor: 'blue'}}/>
          <LineSeries data={graphData} style={{stroke: '#4A549C', strokeWidth: 8}}/>
        </XYPlot>
      </div>
      <p style={{color: 'white', textAlign: 'center'}}>Week of {startDate} - {endDate}</p>
      <h2 style={{textAlign: 'center', color: '#D0C9B4'}}>Sleep & Mood History for Week.</h2>
      <RowWrap>
        <CircleWrap>
          <Text>Longest Sleep</Text>
            <div style={{background: '#F4F4F6', borderRadius: '50%'}}>
            <CircularProgressbar 
            styles={buildStyles({
              textSize: '25px',
              textColor: '#191D37',
              pathColor: '#93875C',
              trailColor: '#F4F4F6'
              
            })}
            value={longestSleep} text={`${longestSleep}`} maxValue={12}/>
            </div>
        </CircleWrap>
        <CircleWrap>
          <Text>Shortest Sleep</Text>
          <div style={{background: '#F4F4F6', borderRadius: '50%'}}>
          <CircularProgressbar 
            styles={buildStyles({
              textSize: '25px',
              textColor: '#191D37',
              pathColor: '#93875C',
              trailColor: '#F4F4F6'
              
            })}
            value={shortestSleep} text={`${shortestSleep}`} maxValue={12}/>
          </div>
        </CircleWrap>
      </RowWrap>
      <RowWrap>
        <CircleWrap>
          <Text>Average Mood</Text>
          <div style={{background: '#F4F4F6', borderRadius: '50%'}}>
          <CircularProgressbar 
            styles={buildStyles({
              textSize: '25px',
              textColor: '#191D37',
              pathColor: '#93875C',
              trailColor: '#F4F4F6'
              
              
            })}
            value={averageMood} text={`${averageMood}`} maxValue={4}/>
          </div>
        </CircleWrap>
        <CircleWrap>
          <Text>Average Sleep</Text>
          <div style={{background: '#F4F4F6', borderRadius: '50%'}}>
          <CircularProgressbar 
            styles={buildStyles({
              textSize: '25px',
              textColor: '#191D37',
              pathColor: '#93875C',
              trailColor: '#F4F4F6'
              
              
            })}
            value={averageSleep} text={`${averageSleep}`} maxValue={12}/>
          </div>
        </CircleWrap>
      </RowWrap>
      <RowWrap style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h2 style={{color: '#EFE3E1', marginBottom: '0', textAlign: 'center'}}>Recommended Hours<br/> of Sleep Overtime</h2>
        <CircleWrap>
          {/* <Text style={{marginLeft: '-35px', whiteSpace:'nowrap', fontSize: '20px', textAlign: 'center'}}>Recommended Hours<br/> <p>of Sleep Overtime</p></Text> */}
          <div style={{background: '#F4F4F6', borderRadius: '50%'}}>
          <CircularProgressbar 
            styles={buildStyles({
              textSize: '25px',
              textColor: '#191D37',
              pathColor: '#93875C',  
              trailColor: '#F4F4F6'
            })}
            value={recommendedSleep} text={`${recommendedSleep}`} maxValue={12}/>
            </div>
        </CircleWrap>
      </RowWrap>
      <div>
        <h2 style={{textAlign: 'center', color: '#D0C9B4', marginTop: '20px', marginBottom: '30px'}}>See additional sleep history by week.</h2>
        <CalendarWrap style={{borderRadius: '8px', border: '5px solid #B07568', width: '350px', margin: '0 auto'}}>
          <Calendar 
            onChange={handleChange}
            value={date}
            // activeStartDate={date}
            // onClickDay={handleCalendarDateClick}
            selectRange={true}
            // returnValue={'start'}
          />
        </CalendarWrap>
        <WhiteSpace></WhiteSpace>
      </div>
    </div>
  )
}

export default Home;

