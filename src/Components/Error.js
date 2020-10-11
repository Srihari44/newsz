import React from "react";

export default function Error(props) {
  let [is404, isEmptyRes] = [props.type === "404", props.type === "No results"];
  let captionText = "Please check your internet connection or reload this page";
  if (is404) {
    captionText = "Please return to Home to see awesome news";
  }
  if (isEmptyRes) {
    captionText = "Try searching with different keywords";
  }

  return (
    <div className="d-flex flex-column align-items-center my-5">
      <h2>{props.type}</h2>
      <p>{captionText}</p>
    </div>
  );
}
