import React from 'react';
import { Header, Table } from 'semantic-ui-react';
import styled from 'styled-components';




const CalenderContainer = styled.div`
    border: 1px solid pink;
    border-radius:5px;
    color: white;
    margin: 30px;
    
`;

const Title = styled.h1`
    color: #edebe3;
    font-family: 'Bitter', serif;
    font-size: 24px;
    margin: 20px 0;
    text-align: center;
`;

const MonthHeader = styled.div`
    display:flex;
    justify-content: center;

    p {
      font-size: 18px;
      margin: 20px 0;
    }
`;

const SleepHistory = () => {

  return (
    <div>
      <Title>Sleep History</Title>
      <CalenderContainer>
        <MonthHeader>
          <p >August 2019</p>
        </MonthHeader>
      </CalenderContainer>
    </div>
  )
}

export default SleepHistory;