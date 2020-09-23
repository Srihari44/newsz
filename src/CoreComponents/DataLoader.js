import React, { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import Header from "../Components/Header";
import DataContainer from "./DataContainer";
import axios from "axios";
import { withRouter } from "react-router-dom";

function Home(props) {
  const [state, stateHandler] = useState({ data: null });

  useEffect(() => {
    let getTitle = props.match.params.query
      ? props.match.params.query
      : props.category;
    let articleData = sessionStorage.getItem(getTitle);
    if (!articleData) {
      const getUrl = props.match.params.query
        ? `search/${getTitle}`
        : props.category;
      axios.get(getUrl).then((res) => {
        stateHandler({ data: res.data.articles });
        sessionStorage.setItem(getTitle, JSON.stringify(res.data.articles));
      });
    } else {
      stateHandler({ data: JSON.parse(articleData) });
    }

    return () => stateHandler({ data: null });
  }, [props.category, props.match.params.query]);

  let title = "Your Top-headlines";
  if (props.match.params.query) {
    title = `Search results for ${props.match.params.query}`;
  }
  if (props.category && props.category.length > 0) {
    title = props.category.charAt(0).toUpperCase() + props.category.slice(1);
  }

  return (
    <div className="px-4">
      {props.location.pathname === "/" ? <Header /> : null}
      <h2 className="label">{title}</h2>
      {!state.data ? <Loader /> : <DataContainer data={state.data} />}
    </div>
  );
}
export default withRouter(Home);
