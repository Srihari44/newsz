import React from 'react';
import axios from 'axios'
import NavBar from "./Components/Navbar"
import DataContainer from './CoreComponents/DataContainer'
import { Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  
  const dataUrl = 'https://pure-castle-32510.herokuapp.com/'
  axios.defaults.baseURL = dataUrl
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact render={() => <DataContainer category=""/>}/>
        <Route path="/business" render={() => <DataContainer category="business"/>}/>
        <Route path="/entertainment" render={() =><DataContainer category="entertainment"/>}/>
        <Route path="/health" render={() =><DataContainer category="health"/>}/>
        <Route path="/science" render={() =><DataContainer category="science"/>}/>
        <Route path="/sports" render={() =><DataContainer category="sports"/>}/>
        <Route path="/technology" render={() =><DataContainer category="technology"/>}/>
      </Switch>
    </div>
  );
}

export default App;
