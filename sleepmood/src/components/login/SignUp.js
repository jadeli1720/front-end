import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import '../../signup.css';

const SignUp = () => {

  const [user, setUser] = useState({ firstname: '', lastname: '', email: '', password: '' })

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
    //       firstname: "", lastname: "", email: "", password: ""
    //   })
   setUser({ firstname: "", lastname: "", email: "", password: "" })
 }

 const Button = styled.button`
    width: 100%;
    background: #efe3e1;
    color: #232432;
    border-radius: 5px;
 `

 

 return (
    <div className="form">
       <h2 style={{textAlign: "center"}}>Create your sleepmood account.</h2>
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
               name="password"
               value={user.password}
               onChange={inputChangeHandler}
             />
           </div>
           <Button type="submit" className="pure-button pure-button-primary">Create Account</Button>
         </fieldset>
       </form>
        <p style={{textAlign: "center"}}>Already have an account? <Link to="/login">Sign In.</Link></p>
     </div>
  )
}

export default SignUp;