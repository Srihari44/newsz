import React, { useEffect } from "react";
import axios from "axios";
import NavBar from "./Components/Navbar";
import DataLoader from "./Core/DataLoader";
import FullData from "./Core/FullData";
import Footer from "./Components/Footer";
import Error from "./Components/Error";
import { Switch, Route } from "react-router-dom";

function App() {
  useEffect(() => sessionStorage.clear(), []);

  axios.defaults.baseURL = "https://pure-castle-32510.herokuapp.com/";

  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/" exact component={DataLoader} />
        <Route
          path="/business"
          render={() => <DataLoader category="Business" />}
        />
        <Route
          path="/entertainment"
          render={() => <DataLoader category="Entertainment" />}
        />
        <Route path="/health" render={() => <DataLoader category="Health" />} />
        <Route
          path="/science"
          render={() => <DataLoader category="Science" />}
        />
        <Route path="/sports" render={() => <DataLoader category="Sports" />} />
        <Route
          path="/technology"
          render={() => <DataLoader category="Technology" />}
        />
        <Route path="/fullpost/:title" component={FullData} />
        <Route path="/search/:query" component={DataLoader} />
        <Route render={() => <Error type="404" />} />
      </Switch>
      <hr />
      <Footer />
    </React.Fragment>
  );
}

export default App;
