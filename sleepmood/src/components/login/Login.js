import React, {useState} from 'react';
import styled from 'styled-components';

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
    background: #efe3e1;
    color: #232432;
    border-radius: 5px;
 `

    return (
        <div>
            <form onSubmit={handleSubmit} className="pure-form pure-form-stacked">
                <fieldset>
                    <legend>Log In</legend>
                    <input 
                        style={{marginBottom: "15px"}}
                        type="text" 
                        name="username"
                        onChange={inputChangeHandler}
                        value={user.email}
                    />
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
        </div>
    )
}



export default Login;