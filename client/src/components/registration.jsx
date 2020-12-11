import { useState } from 'react';
import Axios from 'axios';
function Registration() {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const makeNowDate = () => {
      const today = Date.now();
      const date = new Date(today);
      const dateReg = date.toDateString();
      return dateReg;
    }

    let dateRerist = makeNowDate();
    const addUser = () => {
        Axios.post('/addUser', {
          login: login,
          password: password,
          email: email,
          dateRegist: dateRerist,
          status: 'OK'
        }).then((res) => alert(res.data));
    };

    return(
        <div className = 'registration'>
            <h1>Registration</h1>
            Login(name) :<input type='text' className ='login' onChange = {(e)=>{setLogin(e.target.value)}}></input>
            Email :<input type='email' className ='email' onChange = {(e)=>{setEmail(e.target.value)}}></input>
            Password: <input type="password" className ='password' onChange = {(e)=>{setPassword(e.target.value)}}></input>
            <a href='/'>LogIn</a>
            <button className ='btn btn-outline-primary'onClick ={addUser}> Registration </button>
        </div>
    );
}

export default Registration;