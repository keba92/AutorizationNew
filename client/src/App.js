import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Registration from './components/registration';
import Users from './components/users';
import { useState } from "react";
import Axios from 'axios';

function App() {
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
      <div className="App">
        <div className = 'autorization'>
            <h1>Autorization</h1>
            Login :<input type='text' className ='login' onChange ={(e) => {setLogIn(e.target.value)}}></input>
            Password: <input type="password" className ='password' onChange ={(e) => {setPassword(e.target.value)}}></input>
            <a href='/registration'> Registration </a>
            <button className ='btn btn-outline-primary' onClick ={logIn}> LogIn </button>
        </div>
        <BrowserRouter>{(isisAuthenticated)?<Route exact path="/users" component={Users} />:<Route exact path="/registration" component={Registration} />}
					<Route exact path="/" component={App} />
				</BrowserRouter>
      </div>
    );
}

export default App;
