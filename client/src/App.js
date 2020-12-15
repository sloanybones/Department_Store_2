import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './Demo/Home';
import Things from './Demo/Things';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <NavBar />
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/things' component={Things} />
        <Route component={NoMatch} />
      </Switch>
    </div>
      
    </>
  )
}

export default App;
