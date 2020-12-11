import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Autorization from './components/autorization';
import Registration from './components/registration';
import Users from './components/users';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
					<div>
						<Route exact path="/" component={Autorization} />
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/users" component={Users} />
					</div>
				</BrowserRouter>
    </div>
  );
}

export default App;
