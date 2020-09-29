import React, { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import Header from "../Components/Header";
import DataContainer from "./DataContainer";
import axios from "axios";
import { withRouter } from "react-router-dom";

function Home(props) {
  const [articles, articlesHandler] = useState(null);
  const [title, titleHandler] = useState(null);

  useEffect(() => {
    let [categoryStr, queryStr] = [props.category, props.match.params.query];
    let [sessionTitle, getUrl] = ["Headlines", ""];

    if (categoryStr) {
      [sessionTitle, getUrl] = [categoryStr, categoryStr.toLowerCase()];
      titleHandler(categoryStr);
    } else if (queryStr) {
      [sessionTitle, getUrl] = [queryStr, `search/${queryStr}`];
      titleHandler(`Search results for ${queryStr}`);
    } else {
      titleHandler("Your Top-headlines");
    }

    const sessionData = sessionStorage.getItem(sessionTitle);
    if (sessionData) {
      articlesHandler(JSON.parse(sessionData));
    } else {
      axios.get(getUrl).then((res) => {
        articlesHandler(res.data.articles);
        sessionStorage.setItem(sessionTitle, JSON.stringify(res.data.articles));
      });
    }

    return () => articlesHandler(null);
  }, [props.category, props.match.params.query]);

  return (
    <div className="px-4">
      {props.location.pathname === "/" ? <Header /> : null}
      <h2 className="label">{title}</h2>
      {articles ? <DataContainer data={articles} /> : <Loader />}
    </div>
  );
}
export default withRouter(Home);
