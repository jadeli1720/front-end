import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";

const options = [
  { key: 1, text: 'Home', value: 1 },
  { key: 2, text: 'Sleey History', value: 2 },
  { key: 3, text: 'Create Sleep Entry', value: 3 },
  { key: 4, text: 'Settings', value: 4 },
  { key: 5, text: 'Help', value: 5 },
]

const NavBar = () => (
  <Menu compact>
    <Dropdown text='Home' options={options} simple item />
    <Menu.Item><NavLink to=''/></Menu.Item>
    <Menu.Item><NavLink to=''/></Menu.Item>
    <Menu.Item><NavLink to=''/></Menu.Item>
    <Menu.Item><NavLink to=''/></Menu.Item>
    <Menu.Item><NavLink to=''/></Menu.Item>

  </Menu>
)

export default NavBar
