import React from "react";
import axios from "axios";
import NavBar from "./Components/Navbar";
import DataContainer from "./CoreComponents/DataContainer";
import FullData from "./CoreComponents/FullData";
import { Switch, Route } from "react-router-dom";

function App() {
  axios.defaults.baseURL = "https://pure-castle-32510.herokuapp.com/";

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact render={() => <DataContainer category="" />} />
        <Route
          path="/business"
          render={() => <DataContainer category="business" />}
        />
        <Route
          path="/entertainment"
          render={() => <DataContainer category="entertainment" />}
        />
        <Route
          path="/health"
          render={() => <DataContainer category="health" />}
        />
        <Route
          path="/science"
          render={() => <DataContainer category="science" />}
        />
        <Route
          path="/sports"
          render={() => <DataContainer category="sports" />}
        />
        <Route
          path="/technology"
          render={() => <DataContainer category="technology" />}
        />
        <Route path="/fullpost/:title" component={FullData} />
      </Switch>
      <hr />
      <footer className="text-center sticky-bottom my-3">
        <p className="lead">
          Powered by, <a href="https://newsapi.org/">News API</a>
        </p>
        <p className="lead">
          Made with <span role="img">💙</span> by,{" "}
          <a href="https://vsrihari.co/">V. Sri hari</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
