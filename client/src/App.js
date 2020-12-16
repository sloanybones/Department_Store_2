import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './Demo/Home';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';
import Departments from './components/Departments';

function App() {
  return (
    <>
    <NavBar />
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/departments' component={Departments} />
        <Route component={NoMatch} />
      </Switch>
    </div>
      
    </>
  )
}

export default App;
