import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import {Autorization, Authenticate} from './components/autorization';
import Registration from './components/registration';
import Users from './components/users';

function App() {
 let isAurorization = Authenticate;
  return (
    <div className="App">
      <BrowserRouter> { isAurorization ? <Route exact path="/" component={Autorization} /> || <Route exact path="/registration" component={Registration} /> : <Route exact path="/users" component={Users} />}
			</BrowserRouter>
    </div>
  );
}

export default App;
