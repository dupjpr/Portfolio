import { Provider } from "react-redux";
import DefaultComponent from "./components/DefaultComponent";
import store from './store/store';

function App() {
  
  return (
    <Provider store={store}>
      <DefaultComponent/>

    </Provider>
  );
  
}




export default App;
