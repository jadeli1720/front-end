import React from 'react';

function Login() {
    const [user, setuser] = useState({ username: '', password: ''})

    const handleChange = event => {
        setUser({ ...user, [event.target.name] : [event.target.value]})
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(user.username);
        console.log(user.password);
    }

    return (
        <div>
            <form onSubmit={event => handleSubmit(event)}>
                <label>
                    Username: 
                    <input
                        type="text"
                        name="username"
                        value={user.username}
                        onChange={handleChange(event)}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="text"
                        name="username"
                        value={user.password}
                        onChange={handleChange(event)}
                    />
                </label>
                <button>Log In</button>
            </form>
        </div>
    )
}

export default Login;