import React, { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import Header from "../Components/Header";
import DataContainer from "./DataContainer";
import axios from "axios";
import { withRouter } from "react-router-dom";
// import res from "../tempData.json";

function Home(props) {
  const [state, stateHandler] = useState({ data: null });
  useEffect(() => {
    // // For Production
    const getUrl = props.match.params.query
      ? `search/${props.match.params.query}`
      : props.category;
    axios.get(getUrl).then((res) => {
      stateHandler({ data: res.data.articles });
    });

    //For Development
    // setTimeout(() => dataHandler({ data: res }), 1500);

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
