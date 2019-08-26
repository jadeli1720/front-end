import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";
import styled from'styled-components'

const NavBar = () => {

  const HeaderWrapper = styled.section`
    display: flex;
    text-align: center;
    border-bottom: 1px solid black
    margin: 5%
    padding-bottom: 5%;
    h1 {
      margin: 0 auto;
      width: 100%;
      padding-left: 6rem;
      
    }
    span {
      width: 20%;
      margin-bottom: 2%;
      div {
        width:100%
      }
    }
  `;

  return (
    <HeaderWrapper>
      <h1>sleepmood</h1>
      
        <Menu compact>
            <Dropdown text='Menu' item simple>
              <Dropdown.Menu> 
                <Dropdown.Item as={NavLink} to='/'>Sleepmood</Dropdown.Item>
                <Dropdown.Item as={NavLink} to='/home'>Home</Dropdown.Item>
                <Dropdown.Item as={NavLink} to='/SleepHistory'>Sleep History</Dropdown.Item>
                <Dropdown.Item as={NavLink} to='/CreateSleepEntry'>Create Sleep Entry</Dropdown.Item>
                <Dropdown.Item as={NavLink} to='/Settings'>Settings</Dropdown.Item>
                <Dropdown.Item as={NavLink} to='/Help'>Help</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </Menu>
      
    </HeaderWrapper>
  )
}

export default NavBar
