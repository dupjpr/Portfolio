import { Provider } from "react-redux";
import DefaultComponent from "./components/defaultComponent/DefaultComponent";
import Dropdown from "./components/Dropdowns/Dropdown";
import store from './store/store';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import './utilities/Normalize.scss';
import RGB from "./components/RGB/Rgb";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <header className='header'>
          <NavLink to="/" >
            Home
          </NavLink>
          <NavLink to="/dropdown" >
            Dropdowns
          </NavLink>
          <NavLink to="/rgb" >
            RGB Challenge
          </NavLink>
        </header>
        <Switch>
          <Route path="/" exact> <DefaultComponent /> </Route>
          <Route path="/dropdown"> <Dropdown /> </Route>
          <Route path="/rgb"> <RGB /> </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
