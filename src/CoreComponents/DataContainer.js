import React, { useEffect, useState } from "react";
import { Zoom } from "react-reveal";
import Reveal from "react-reveal/Reveal";
import Card from "../Components/Card";
import { Row, Col, Container, Jumbotron, Spinner } from "react-bootstrap";
import axios from "axios";
import "animate.css";
import res from "./Data.json";

function Home(props) {
  const [data, dataHandler] = useState({ data: null });
  useEffect(() => {
    // axios.get(`/${props.category}`).then((res) => {
    //   dataHandler({ data: res.data.articles.slice(0, 10) });
    // });
    dataHandler({ data: res });
  }, []);
  return (
    <div>
      <Jumbotron className="mt-5 bg-secondary">
        <Container>
          <h1 className="display-4">Hi, This is NewsZ</h1>
          <p className="lead">One n only news you ever need.</p>
        </Container>
      </Jumbotron>
      <h2 className="label">Your Top-headlines</h2>
      {!data.data ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <Zoom bottom>
          <Row xs={1} sm={2} md={3} lg={4} className="mx-auto">
            <Reveal effect="animate__fadeIn">
              {data.data.map((item) => (
                <Col className="pl-4 my-3">
                  <Card imgUrl={item.urlToImage} title={item.title} />
                </Col>
              ))}
            </Reveal>
          </Row>
        </Zoom>
      )}
    </div>
  );
}
export default Home;
