import React from "react";
import { withRouter } from "react-router-dom";
import { Carousel } from "react-bootstrap";

function Header(props) {
  return (
    <Carousel className="mt-0 mb-5">
      <Carousel.Item onClick={() => props.history.push("/business")}>
        <img
          style={{ minHeight: "260px", height: "260px" }}
          className="w-100"
          src="https://images.unsplash.com/photo-1515868769-ad822a0c67e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          alt="Business"
        />
        <Carousel.Caption>
          <div className="carousel-text bg-overlay p-4 mt-2 rounded">
            <h3>Business</h3>
            <p>Business at every moment</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item onClick={() => props.history.push("/entertainment")}>
        <img
          style={{ minHeight: "260px", height: "260px" }}
          className="w-100"
          src="https://www.livenationentertainment.com/wp-content/uploads/2018/11/our-culture-1920x927.jpg"
          alt="Entertainment"
        />
        <Carousel.Caption>
          <div className="carousel-text bg-overlay p-4 mt-2 rounded">
            <h3>Entertainment</h3>
            <p>Keep yourself entertained</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item onClick={() => props.history.push("/health")}>
        <img
          style={{ minHeight: "260px", height: "260px" }}
          className="w-100"
          src="https://images.unsplash.com/uploads/1412533519888a485b488/bb9f9777?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          alt="Health"
        />

        <Carousel.Caption>
          <div className="carousel-text bg-overlay p-4 mt-2 rounded">
            <h3>Health</h3>
            <p>Health is wealth</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item onClick={() => props.history.push("/science")}>
        <img
          style={{ minHeight: "260px", height: "260px" }}
          className="w-100"
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80"
          alt="Science"
        />

        <Carousel.Caption>
          <div className="carousel-text bg-overlay p-4 mt-2 rounded">
            <h3>Science</h3>
            <p>All you need is Science</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item onClick={() => props.history.push("/sports")}>
        <img
          style={{ minHeight: "260px", height: "260px" }}
          className="w-100"
          src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          alt="Sports"
        />

        <Carousel.Caption>
          <div className="carousel-text bg-overlay p-4 mt-2 rounded">
            <h3>Sports</h3>
            <p>Get your Sporting gear up</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item onClick={() => props.history.push("/technology")}>
        <img
          style={{ minHeight: "260px", height: "260px" }}
          className="w-100"
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          alt="Technology"
        />

        <Carousel.Caption>
          <div className="carousel-text bg-overlay p-4 mt-2 rounded">
            <h3>Technology</h3>
            <p>Technology is the only future</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default withRouter(Header);
