import React, { useEffect, useState } from "react";
import { Zoom, Fade } from "react-reveal";
import Card from "../Components/Card";
import Loader from "../Components/Loader";
import Header from "../Components/Header";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import {  withRouter } from "react-router-dom";
// import res from "../tempData.json";
function Home(props) {
  const [data, dataHandler] = useState({ data: null });
  useEffect(() => {
    axios.get(`/${props.category}`).then((res) => {
      dataHandler({ data: res.data.articles });
    });
    // setTimeout(() => dataHandler({ data: res }), 1500);
    return () => {
      dataHandler({ data: null });
    };
  }, [props.category]);

  const fullPostHandler = (articleData) => {
        props.history.push(
          {
            pathname: '/fullpost/' + articleData.title,
            state: articleData,
          }
        )
  };
  return (
    <div className="px-4">
      {props.location.pathname === "/" ? <Header /> : null}
      <h2 className="label">
        {props.category.length !== 0
          ? props.category.charAt(0).toUpperCase() + props.category.slice(1)
          : "Your Top-headlines"}
      </h2>
      {!data.data ? (
        <Loader />
      ) : (
        <Zoom left>
          <Row sm={2} md={3} lg={4} className="align-items-stretch">
            {data.data.map((item) => (
              <Col className="d-flex justify-content-center p-3">
                <Fade left>
                  <Card
                    imgUrl={item.urlToImage}
                    title={item.title}
                    clickHandler={() => fullPostHandler(item)}
                  />
                </Fade>
              </Col>
            ))}
          </Row>
        </Zoom>
      )}
    </div>
  );
}
export default withRouter(Home);
