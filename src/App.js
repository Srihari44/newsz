import React from 'react';
import axios from 'axios'
import NavBar from "./Components/Navbar"
import DataContainer from './CoreComponents/DataContainer'
import { Switch, Route } from 'react-router-dom'
import './App.css';

function App() {

  axios.defaults.baseURL = 'https://pure-castle-32510.herokuapp.com/'
  
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
      <footer className='d-flex justify-content-around m-4'>
      <div>
        <p className="lead">Powered by,</p>
        <a href="https://newsapi.org/"
          ><img
            style={{height: "32px", width: "auto"}}
            src="https://newsapi.org/apple-touch-icon.png"
            alt="N"
        /></a>
      </div>
      <div>
        <p className="lead">Designed and developed by,</p>
        <a href="https://vsrihari.co/">V. Sri hari</a>
      </div>
    </footer>
    </div>
  );
}

export default App;
