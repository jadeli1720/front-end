import React, { useState, useEffect } from 'react';
import '../../node_modules/react-vis/dist/style.css';
import  { 
  XAxis,
  YAxis,
  XYPlot, LineSeries } from 'react-vis';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { getRecommendedHoursOfSleep, getGraphData } from './../helpers.js';

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
      let data = res.data;
      console.log(data)

      let recommendedHours = getRecommendedHoursOfSleep(data);
      setRecommendedSleep(recommendedHours);

      let week = data.slice(data.length - 7);


      let xAxis = week.map(item => {
        return item.wakedate[2];
      })
      setXAxisValues(xAxis);

      let graphData = getGraphData(week, setStartDate, setEndDate, setLongestSleep, setShortestSleep, setAverageSleep, setAverageMood);
      setGraphData(graphData);

    })
    .catch(err => {
      console.log('HERE Opps, Something happened!', err)
    }) 
  }, [])

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

