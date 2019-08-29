import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { axiosLoginAuth } from '../../utils/axiosWithAuth'
import './Login.css';


function Login(props) {
    const [user, setUser] = useState({ username: '', password: ''})

    const inputChangeHandler = event => {
        setUser({ ...user, [event.target.name] : event.target.value })
        event.target.focus()
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(user);

        //This is the post request that allows connection to backend
        axiosLoginAuth()
        .post('/login',`grant_type=password&username=${user.username}&password=${user.password}`)
        .then(res => {
            localStorage.setItem("token", res.data["access_token"]);
            localStorage.setItem("tokenType", res.data["token_type"]);
            props.history.push('/home');
            console.log('Successful Login', res)
        })
        .catch(err => {
          console.log('Oops, Something happened!', err.response)
        }) 
        setUser({
          username: '',
          password: ''
      })
    }

    const Button = styled.button`
    width: 100%;
    background: #d0c9b4;
    color: #232432;
    border-radius: 5px;
 `

 const FormDiv = styled.div`
    background: #232432;
    padding: 10px 0;
 `

    return (
        // <FormDiv className="">
        <div>
            <form onSubmit={handleSubmit} className="pure-form pure-form-stacked">
                <fieldset>
                    <legend style={{color: "white"}}>Sign in to sleepmood</legend>
                    <label htmlFor="email">Email</label>
                    <input 
                        style={{marginBottom: "15px"}}
                        type="text" 
                        name="username"
                        placeholder="Username"
                        onChange={inputChangeHandler}
                        value={user.username}
                    />
                    <label htmlFor="password">Password</label>
                    <input 
                        style={{marginBottom: "15px"}}
                        className="input-class"
                        type="password" 
                        name="password"
                        onChange={inputChangeHandler}
                        value={user.password}
                    />
                    <Button 
                        type="submit" 
                        className="pure-button pure-button-primary">
                        Sign in
                    </Button>
                </fieldset>
            </form>
            <p style={{textAlign: "center", color: "white"}}>Forgot Password? <Link to="/login">Click here.</Link></p>
        {/* </FormDiv> */}
        </div>
    )
}



export default Login;