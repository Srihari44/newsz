import React from "react";
import { Row, Col } from "react-bootstrap";
import { Zoom } from "react-reveal";
import Card from "../Components/Card";
import { withRouter } from "react-router-dom";

function DataLoader(props) {
  const fullPostHandler = (articleData) => {
    props.history.push({
      pathname: "/fullpost/" + encodeURIComponent(articleData.title),
      state: articleData,
    });
  };

  return (
    <Zoom left>
      <Row sm={2} md={3} lg={4} className="align-items-stretch">
        {props.data.map((item) => (
          <Col className="d-flex justify-content-center p-3">
            <Card
              imgUrl={item.urlToImage}
              title={item.title}
              clickHandler={() => fullPostHandler(item)}
            />
          </Col>
        ))}
      </Row>
    </Zoom>
  );
}

export default withRouter(DataLoader);
