import React from 'react';
import { useState } from "react";
import Axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import Users from 'users';
function Autorization() {
    const [login, setLogIn] = useState('');
    const [password, setPassword] = useState('');
    const [isisAuthenticated, setAuthenticated] = useState(false);

    const logIn = () => {
        Axios.post('/haveUser',{
            login:  login,
            password: password
        }).then((response) => {
          if (response.data){
            setAuthenticated(true);
            window.location.assign('/users')
          } else {
            alert('Not found or User is Block');
          }
        })
      };

    return(
        <div className = 'autorization'>
            <h1>Autorization</h1>
            Login :<input type='text' className ='login' onChange ={(e) => {setLogIn(e.target.value)}}></input>
            Password: <input type="password" className ='password' onChange ={(e) => {setPassword(e.target.value)}}></input>
            <a href='/registration'> Registration </a>
            <button className ='btn btn-outline-primary' onClick ={logIn}> LogIn </button>
            <BrowserRouter>{isisAuthenticated ? <Users /> : <Autorization/> }</BrowserRouter>
        </div>
    );
}

export default Autorization;