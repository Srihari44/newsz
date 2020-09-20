import React from "react";
import { Row, Col } from "react-bootstrap";
import { Fade } from "react-reveal";
import Card from "../Components/Card";
import { withRouter } from "react-router-dom";

function DataLoader(props) {
  const fullPostHandler = (itemIdx) => {
    props.history.push({
      pathname: "/fullpost/" + encodeURIComponent(props.data[itemIdx].title),
      state: {totalData: props.data, itemIdx: itemIdx}
    });
  };

  return (
    <Fade bottom>
      <Row sm={2} md={3} lg={4} className="align-items-stretch">
        {props.data.map((item, idx, arr) => (
          <Col className="d-flex justify-content-center p-3">
            <Card
              imgUrl={item.urlToImage}
              title={item.title}
              clickHandler={() =>
                fullPostHandler(idx)
              }
            />
          </Col>
        ))}
      </Row>
    </Fade>
  );
}

export default withRouter(DataLoader);
