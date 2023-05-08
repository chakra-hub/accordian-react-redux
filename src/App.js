import './App.css';
import Accordian from './components/Accordian';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Accordian/>
    </div>
    </Provider>
  );
}

export default App;
