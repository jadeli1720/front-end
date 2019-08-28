import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Help = () => {

  const HelpWrap = styled.div`
    color: #cfd2e8;
    margin: 5%;
    button {
      background: #b07568;
      border-radius: 5px;
      border: none;
      color: white;
      font-weight: bold;
      
      padding: 8px 8px;
      text-align: center;
    }
  `;

  return (
    <HelpWrap>
      <h3>Getting started</h3>
      <Link to='/signup'><button><h3>Click here to make an account</h3></button></Link>

      <h3>Login</h3>
      <Link to='/login'><button><h3>Click here to login</h3></button></Link>

      <h3>Start by creating a sleep entry</h3>
      <Link to='/CreateSleepEntry'><button><h3>Click here to create sleep entry</h3></button></Link>

      <h3>Sleep entry history</h3>
      <Link to='/SleepHistory'><button><h3>Click here to see your sleep history</h3></button></Link>

      <h3>See your weekly graph</h3>
      <Link to='/SleepHistory'><button><h3>Click here to see your weekly graph</h3></button></Link>

    </HelpWrap>
  )
}

export default Help;