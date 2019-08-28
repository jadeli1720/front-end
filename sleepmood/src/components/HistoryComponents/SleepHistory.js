import React from 'react';
// import { Header, Table } from 'semantic-ui-react';
import styled from 'styled-components';

import MyBigCalendar from './BigCalander';

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
    margin: 100px 0 40px;
    text-align: center;
`;


const SleepHistory = () => {

  return (
    <div>
      <Title>Sleep History By Month</Title>
      <CalenderContainer>
      <MyBigCalendar/>
      
      </CalenderContainer>

    </div>
  )
}

export default SleepHistory;