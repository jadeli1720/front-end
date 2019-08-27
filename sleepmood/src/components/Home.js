import React from 'react';
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

const data = [
  {x: 0, y: 8},
  {x: 1, y: 5},
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
const averageMood = ':)';
const averageSleep = 6;
const recommendedSleep = 7;


const Home = () => {

  return (
    <div>
    <h3>Your sleep for August</h3>
    <XYPlot height={300} width={500}>
      <XAxis tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 
                          14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]}/>
      <YAxis tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}/>
      <LineSeries data={data} />
    </XYPlot>
    <h3>Sleep and Mood History for August</h3>
    <div style={{display: 'flex', justifyContent: 'space-between', margin: '20px'}}>
      <div style={{width: '25%'}}>
      <p style={{textAlign: 'center', fontSize: '16px'}}>Longest Sleep</p>
        <CircularProgressbar 
        styles={buildStyles({
          // textSize: '7px'
        })}
        value={longestSleep} text={`${longestSleep}`} />
      </div>
      <div style={{width: '25%'}}>
        <p style={{textAlign: 'center', fontSize: '16px'}}>Shortest Sleep</p>
        <CircularProgressbar value={shortestSleep} text={`${shortestSleep}`} />
      </div>
    </div>
    <div style={{display: 'flex', justifyContent: 'space-between', margin: '20px'}}>
      <div style={{width: '25%'}}>
        <p style={{textAlign: 'center', fontSize: '16px'}}>Average Mood</p>
        <CircularProgressbar value={averageMood} text={`${averageMood}`} />
      </div>
      <div style={{width: '25%'}}>
        <p style={{textAlign: 'center', fontSize: '16px'}}>Average Sleep</p>
        <CircularProgressbar value={averageSleep} text={`${averageSleep}`} />
      </div>
    </div>
    <div style={{display: 'flex', justifyContent: 'space-between', margin: '20px'}}>
      <div style={{width: '25%'}}>
        <p style={{textAlign: 'center', fontSize: '16px'}}>Recommended Hours</p>
        <CircularProgressbar value={recommendedSleep} text={`${recommendedSleep}`} />
      </div>
    </div>
    </div>
  )
}

export default Home;

