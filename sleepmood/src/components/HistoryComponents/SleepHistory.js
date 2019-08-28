import React from 'react';
// import { Header, Table } from 'semantic-ui-react';
import styled from 'styled-components';

import BigCalendar from './BigCalander';

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


const SleepHistory = () => {

  return (
    <div>
      <Title>Sleep History By Month</Title>
      <CalenderContainer>
        <BigCalendar />
      </CalenderContainer>
      
      <ButtonContainer>
        <button>See More</button>
      </ButtonContainer>

    </div>
  )
}

export default SleepHistory;