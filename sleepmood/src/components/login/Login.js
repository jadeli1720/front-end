import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import './Login.css';

function Login() {
    const [user, setUser] = useState({ username: '', password: '' })

    const inputChangeHandler = event => {
        setUser({ ...user, [event.target.name] : [event.target.value] })
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(user);
        //This is the post request that allows connection to backend
    //     axios.post(`  `, user)
    //     .then(res => {
    //       localStorage.setItem('token', res.data.payload);
    //       props.history.push('/home');
    //       console.log('Successful Login', res.data)
    //     })
    //     .catch(err => {
    //       console.log('Opps, Something happened!', err.response)
    //     }) 
    //     setUser({
    //       username: '',
    //       password: ''
    //   })
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
        <FormDiv className="">
            <form onSubmit={handleSubmit} className="pure-form pure-form-stacked">
                <fieldset>
                    <legend style={{color: "white"}}>Sign in to sleepmood</legend>
                    <label htmlFor="email">Email</label>
                    <input 
                        style={{marginBottom: "15px"}}
                        type="text" 
                        name="username"
                        onChange={inputChangeHandler}
                        value={user.email}
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
        </FormDiv>
    )
}



export default Login;