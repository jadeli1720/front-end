import React from 'react'
import { Dropdown, Menu, Icon } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";
import styled from 'styled-components'

const NavBar = () => {

    const HeaderWrapper = styled.section`
    display: flex;
    text-align: center;
    border-bottom: 1px solid black;
    margin: 5% 5%;
    padding-bottom: 5%;
    justify-content: space-between;

    .iconDiv {
      display: flex;
      .cloud {
        font-size: 4rem;
        color: #4A549C;
        position: relative;
        top: 2.5rem;
        left: 1rem;
        z-index: 2;
        text-shadow: 2px 2px 8px #817C74;
    
      }
      .moon {
        color: #979ECD;
        font-size: 3rem;
        position: relative;
        left: -1.2rem;
        top: 1rem;
        transform: rotate(-10deg);
      }
      h1 {
        /* margin: 0 auto; */
        /* width: 100%; */
        position: relative;
        top: 1rem;
        left: -3rem;
        z-index: 3;
      }
    }

  .menuDiv{
    width: 8rem;
    justify-content: center;
  }


  `;

    return (
        <HeaderWrapper>
            <div className='iconDiv'>
                <Icon name='cloud' className='cloud' />
                <Icon name='moon' className='moon' />
                <h1>sleepmood</h1>
            </div>

            <Menu compact>
                <Dropdown text='Menu' className='menuDiv' item simple>
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