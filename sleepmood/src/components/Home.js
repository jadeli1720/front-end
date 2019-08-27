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

const data = [
  // {x: 0, y: 0},
  {x: 1, y: 0},
  {x: 2, y: 4},
  {x: 3, y: 9},
  {x: 4, y: 1},
  {x: 5, y: 7},
  {x: 6, y: 6},
  {x: 7, y: 3},
  {x: 8, y: 2},
  {x: 9, y: 10},
  {x: 10, y: 11},
  {x: 11, y: 10},
  {x: 12, y: 12},
  {x: 13, y: 4},
  {x: 14, y: 4},
  {x: 15, y: 5},
  {x: 16, y: 10},
  {x: 17, y: 6},
  {x: 18, y: 4},
  {x: 19, y: 4},
  {x: 20, y: 12},
  {x: 21, y: 6},
  {x: 22, y: 6},
  {x: 23, y: 6},
  {x: 24, y: 5},
  {x: 25, y: 4},
  {x: 26, y: 5},
  {x: 27, y: 5},
  {x: 28, y: 7},
  {x: 29, y: 9},
  {x: 30, y: 4},
  {x: 31, y: 5}
];

const longestSleep = 9;
const shortestSleep = 4;
const averageMood = 3;
const averageSleep = 6;
const recommendedSleep = 7;

const CircleWrap = styled.div`
  width: 30%; 
  margin: 30px;
`

const RowWrap = styled.div`
  display: flex;
  justify-content: center;
`
const Text = styled.p`
  text-align: center; 
  font-size: 16px;
  white-space:nowrap
`

const Home = () => {
  const [xAxisValues, setXAxisValues] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 
    14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]);

  useEffect(() => {

  })

  const handleChange = () => {

  }

  return (
    <div style={{margin: '10px', display: 'flex', flexDirection: 'column'}}>
      <h2 style={{marginLeft: '10px'}}>Your sleep for August</h2>
      <div>
        <XYPlot height={300} width={470}>
          <XAxis tickValues={xAxisValues}/>
          <YAxis tickValues={['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}/>
          <LineSeries data={data} />
        </XYPlot>
      </div>
      <h2 style={{textAlign: 'center'}}>Sleep and Mood History for August.</h2>
      <RowWrap>
        <CircleWrap>
          <Text>Longest Sleep</Text>
          <CircularProgressbar 
          styles={buildStyles({
            // textSize: '7px'
          })}
          value={longestSleep} text={`${longestSleep}`} maxValue={12}/>
        </CircleWrap>
        <CircleWrap>
          <Text>Shortest Sleep</Text>
          <CircularProgressbar value={shortestSleep} text={`${shortestSleep}`} maxValue={12}/>
        </CircleWrap>
      </RowWrap>
      <RowWrap>
        <CircleWrap>
          <Text>Average Mood</Text>
          <CircularProgressbar value={averageMood} text={`${averageMood}`} maxValue={4}/>
        </CircleWrap>
        <CircleWrap>
          <Text>Average Sleep</Text>
          <CircularProgressbar value={averageSleep} text={`${averageSleep}`} maxValue={12}/>
        </CircleWrap>
      </RowWrap>
      <RowWrap>
        <CircleWrap>
          <Text>Recommended Hours</Text>
          <CircularProgressbar value={recommendedSleep} text={`${recommendedSleep}`} maxValue={12}/>
        </CircleWrap>
      </RowWrap>
      <div>
        <h2 style={{textAlign: 'center'}}>See additional sleep history by week.</h2>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Calendar 
            onChange={handleChange}
            value={new Date()}
          />
        </div>
      </div>
    </div>
  )
}

export default Home;

