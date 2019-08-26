import React, {useState} from 'react';

function Login() {
    const [user, setUser] = useState({ email: '', password: ''})

    const inputChangeHandler = event => {
        setUser({ ...user, [event.target.name] : [event.target.value] })
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(user.username);
        console.log(user.password);
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

    return (
        <div>
            <form onSubmit={handleSubmit} className="pure-form">
                <fieldset>
                    <legend>Log In</legend>
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Email"
                        onChange={inputChangeHandler}
                        value={user.email}
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