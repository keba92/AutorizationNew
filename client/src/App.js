import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Autorization from './components/autorization';
import Registration from './components/registration';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
					<div>
						<Route exact path="/" component={Autorization} />
            <Route exact path="/registration" component={Registration} />
					</div>
				</BrowserRouter>
    </div>
  );
}

export default App;
