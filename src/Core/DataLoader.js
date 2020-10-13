import React, { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import Header from "../Components/Header";
import Error from "../Components/Error";
import DataContainer from "./DataContainer";
import axios from "axios";
import { withRouter } from "react-router-dom";

function Home(props) {
  const [articles, articlesHandler] = useState(null);
  const [title, titleHandler] = useState(null);
  const [error, errorHandler] = useState(null);

  useEffect(() => {
    let [categoryStr, queryStr] = [props.category, props.match.params.query];
    let [sessionTitle, getUrl] = ["Headlines", ""];

    if (categoryStr) {
      [sessionTitle, getUrl] = [categoryStr, categoryStr.toLowerCase()];
      titleHandler(categoryStr);
    } else if (queryStr) {
      [sessionTitle, getUrl] = [queryStr, `search/${queryStr}`];
      titleHandler(`Search results for ${decodeURIComponent(queryStr)}`);
    } else {
      titleHandler("Your Top-headlines");
    }

    const sessionData = sessionStorage.getItem(sessionTitle);
    if (sessionData) {
      errorHandler(false);
      articlesHandler(JSON.parse(sessionData));
    } else {
      axios
        .get(getUrl)
        .then((res) => {
          errorHandler(false);
          articlesHandler(res.data.articles);
          sessionStorage.setItem(
            sessionTitle,
            JSON.stringify(res.data.articles)
          );
        })
        .catch((err) => errorHandler(err.message));
    }

    return () => articlesHandler(null);
  }, [props.category, props.match.params.query]);

  let RenderArticles = () => {
    if (!articles) {
      return <Loader />;
    } else {
      return articles.length !== 0 ? (
        <DataContainer data={articles} />
      ) : (
        <Error type="No results" />
      );
    }
  };

  return (
    <div className="px-4">
      {!error ? (
        <React.Fragment>
          {props.location.pathname === "/" ? <Header /> : null}
          <h2 className="label">{title}</h2>
          <RenderArticles />
        </React.Fragment>
      ) : (
        <Error type={error} />
      )}
    </div>
  );
}
export default withRouter(Home);
