import React, { useState } from 'react';
import axios from 'axios';
import { axiosLoginAuth } from '../../utils/axiosWithAuth';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Warning from './Warning';
import './signup.css';


const SignUp = (props) => {

  const [user, setUser] = useState({ firstname: '', lastname: '', email: '', password: '', confirmpassword: '' })

  const handleConfirm = () => {
    const {password, confirmpassword} = user;
    // perform all neccessary validations
    if (password !== confirmpassword) {
      return 
    } 
  }

  const inputChangeHandler = event => {
    event.preventDefault();
    setUser({ ...user, [event.target.name]:event.target.value })
    console.log(
      "handleChange",
      event.target.name,
      event.target.value,
    );
  }

  const handleSubmit = event => {
    event.preventDefault();

    // handleConfirm()
    // Warning/Error Popup

    console.log(user);
    //  This is the post request that allows connection to backend
    axios.post("https://sleep-mood-db.herokuapp.com/createnewuser", user)
      .then(res => {
        // props.history.push('/login');
        if (res.status === 201) {
          axiosLoginAuth()
            .post('/login', `grant_type=password&username=${user.email}&password=${user.password}`)
            .then(res => {
              localStorage.setItem("token", res.data["access_token"]);
              localStorage.setItem("tokenType", res.data["token_type"]);
              props.history.push('/home');
              console.log('Successful Login', res.data)
            })
            .catch(err => {
              console.log('Opps, Something happened!', err.response)
            })
        }
        console.log('Successful Login', res.data)
      })
      .catch(err => {
        console.log('Opps, Something happened!', err.response)
      })
    setUser({
      firstname: "", lastname: "", email: "", password: ""
    })
    //{firstname: "l", lastname: "j", email: "j@g.c", password: "pw"}

  }

  const Button = styled.button`
    color: black;
    background: #f3f3f3;
    width: 100%;
    background: #b07568;
    color: #231f14;
    border-radius: 5px;
 `

 const Header = styled.h2`
   text-align: center;
   color: white
 `

  return (
    <div>
      <p style={{color: "white"}}>Never waste any time you can spend sleeping.</p>
      <Header>Create your account.</Header>
      <form onSubmit={handleSubmit} className="pure-form pure-form-stacked">
        <fieldset>
          <div className="pure-control-group">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              name="firstname"
              value={user.firstname}
              onChange={inputChangeHandler}
            />
          </div>

          <div className="pure-control-group">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              name="lastname"
              value={user.lastname}
              onChange={inputChangeHandler}
            />
          </div>

          <div className="pure-control-group">
            <label htmlFor="lastname">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={inputChangeHandler}
            />
          </div>

          <div className="pure-control-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={inputChangeHandler}
            />
          </div>

          <div className="pure-control-group">
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              name="confirmpassword"
              value={user.confirmpassword}
              onChange={inputChangeHandler}
            />
          </div>
          <Button type="submit" className="pure-button pure-button-primary">Sign Up</Button>
        </fieldset>
      </form>
      <p style={{ textAlign: "center", color: 'white' }}>Already have an account? <Link to="/login">Sign In.</Link></p>
    </div>
  )
}

export default SignUp;