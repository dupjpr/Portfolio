import { Provider } from "react-redux";
import DefaultComponent from "./components/defaultComponent/DefaultComponent";
import store from './store/store';

import './utilities/Normalize.scss';


function App() {
  
  return (
    <Provider store={store}>
      <DefaultComponent/>
    </Provider>
  );

}

export default App;
