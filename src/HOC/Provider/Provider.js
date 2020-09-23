import React, { useEffect, useState, useContext } from "react";
import Loader from "../../Components/Loader";
import Header from "../../Components/Header";
import DataContainer from "./DataContainer";
import axios from "axios";
import { withRouter } from "react-router-dom";

function dataProvider(props) {
  const [title, titleHandler] = useState("Your Top-headlines");
  const [currData, currDataHandler] = useState(null);
  const [data, dataHandler] = useState(null);

  const DataContext = React.createContext({
    dataTitle: title,
    dataValue: data,
    currData: currData,
  });

  const fullPostLoader = (idx) => {
    currDataHandler(data[idx]);
    props.history.push(`fullpost/${data[idx]}`);
  };

  useEffect(() => {
    let getUrl = props.category;
    if (props.match.params.query) {
      titleHandler(`Search results for ${props.match.params.query}`);
      getUrl = `search/${props.match.params.query}`;
    }
    if (props.category && props.category.length > 0) {
      titleHandler(
        props.category.charAt(0).toUpperCase() + props.category.slice(1)
      );
    }
    axios.get(getUrl).then((res) => {
      dataHandler(res.data.articles);
    });

    return () => dataHandler(null);
  }, [props.category, props.match.params.query]);

  return (
    <DataContext.Provider
      value={{
        dataTitle: title,
        dataValue: data,
        selectHandler: fullPostLoader,
        fullData: currData,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
export default withRouter(dataProvider);
