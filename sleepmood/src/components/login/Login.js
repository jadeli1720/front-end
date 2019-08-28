import React, {useState} from 'react';
import { axiosLoginAuth } from '../../utils/axiosWithAuth'

function Login(props) {
    const [user, setUser] = useState({ username: '', password: ''})

    const inputChangeHandler = event => {
        setUser({ ...user, [event.target.name] : [event.target.value] })
    }

    const handleSubmit = event => {
        event.preventDefault();
        //This is the post request that allows connection to backend
        axiosLoginAuth()
        .post('/login',`grant_type=password&username=${user.username}&password=${user.password}`)
        .then(res => {
            localStorage.setItem("token", res.data["access_token"]);
            localStorage.setItem("tokenType", res.data["token_type"]);
            props.history.push('/home');
            console.log('Successful Login', res.data)
        })
        .catch(err => {
          console.log('Opps, Something happened!', err.response)
        }) 
        setUser({
          username: '',
          password: ''
      })
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="pure-form">
                <fieldset>
                    <legend>Log In</legend>
                    <input 
                        type="text" 
                        name="username"
                        placeholder="Username"
                        onChange={inputChangeHandler}
                        value={user.username}
                    />
                    <input 
                        type="password" 
                        name="password"
                        placeholder="Password"
                        onChange={inputChangeHandler}
                        value={user.password}
                    />
                    <button 
                        type="submit" 
                        className="pure-button pure-button-primary">
                        Sign in
                    </button>
                </fieldset>
            </form>
        </div>
    )
}



export default Login;