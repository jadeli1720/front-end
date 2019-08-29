import React from 'react';
// import { Header, Table } from 'semantic-ui-react';
import styled from 'styled-components';

import BigCalendar from './BigCalander';

import 'react-big-calendar/lib/css/react-big-calendar.css';//needs to go in sass
import './history.scss';

const CalenderContainer = styled.div`
    border-radius:5px;
    color: white;
    margin: 30px auto;
    padding: 0px 10px;
    /* width: 460px; */
`;

const Title = styled.h1`
    color: #edebe3;
    font-family: 'Bitter', serif;
    font-size: 24px;
    padding: 40px 0 10px;
    text-align: center;
`;

const ButtonContainer = styled.div`
    text-align: center;
    width: 460px;

    button{
      margin: 50px auto 30px;
      background: #C1b89c;
        border-radius: 5px;
        border: none;
        color: #191D37;
        font-weight: bold;
        padding: 8px 5px;
        text-align: center;
        width: 140px;
    }
`;


const SleepHistory = (props) => {

  const toSleepEntry = e => {
    console.log(e)
    props.history.push(`/CreateSleepEntry/${e.id}`)
  }

  //does this need to change so that it routes to the sleep entries data where there will be an edit button to then route the edit form?

  return (
    <div>
      <Title>Sleep History By Month</Title>
      <CalenderContainer>
        <BigCalendar clicked={toSleepEntry} />
      </CalenderContainer>
      
      <ButtonContainer>
        <button>See More</button>
      </ButtonContainer>

    </div>
  )
}

export default SleepHistory;