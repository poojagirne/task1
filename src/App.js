import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch,Route,Link as NavLink} from 'react-router-dom'
import Navbar from './usercomponent/navbar'
import Maincomponent from './usercomponent/Maincomponent'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Maincomponent/>
      </BrowserRouter>
    </div>
  );
}

export default App;
