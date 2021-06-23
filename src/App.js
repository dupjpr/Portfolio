import { Provider } from "react-redux";
import DefaultComponent from "./components/defaultComponent/DefaultComponent";
import About from "./components/about/About";
import Home from './components/Home/Home.jsx'
import store from './store/store';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import './utilities/Normalize.scss';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/porojects">
          Projects
        </NavLink>
        <Switch>
          <Route path="/" exact> <Home /> </Route>
          <Route path="/about"><About /></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
