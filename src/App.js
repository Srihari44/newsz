import React from "react";
import axios from "axios";
import NavBar from "./Components/Navbar";
import DataLoader from "./CoreComponents/DataLoader";
import FullData from "./CoreComponents/FullData";
import { Switch, Route } from "react-router-dom";
import ScrollToTop from "./HOC/ScrollToTop";

function App() {
  axios.defaults.baseURL = "https://pure-castle-32510.herokuapp.com/";

  return (
    <ScrollToTop>
      <NavBar />
      <Switch>
        <Route path="/" exact render={() => <DataLoader category="" />} />
        <Route
          path="/business"
          render={() => <DataLoader category="business" />}
        />
        <Route
          path="/entertainment"
          render={() => <DataLoader category="entertainment" />}
        />
        <Route path="/health" render={() => <DataLoader category="health" />} />
        <Route
          path="/science"
          render={() => <DataLoader category="science" />}
        />
        <Route path="/sports" render={() => <DataLoader category="sports" />} />
        <Route
          path="/technology"
          render={() => <DataLoader category="technology" />}
        />
        <Route path="/fullpost/:title" component={FullData} />
        <Route path="/search/:query" component={DataLoader} />
      </Switch>
      <hr />
      <footer className="text-center sticky-bottom my-3">
        <p className="lead">
          Powered by, <a href="https://newsapi.org/">News API</a>
        </p>
        <p className="lead">
          Made with{" "}
          <span role="img" aria-label="love">
            💙
          </span>{" "}
          by, <a href="https://vsrihari.co/">V. Sri hari</a>
        </p>
      </footer>
    </ScrollToTop>
  );
}

export default App;
