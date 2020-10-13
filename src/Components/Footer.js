import React from "react";
import { CodeSlash } from "react-bootstrap-icons";

export default function Footer() {
  return (
    <footer className="text-center sticky-bottom my-3">
      <p className="lead">
        Contribute at <a href="https://github.com/Srihari44/newsz"> GitHub <CodeSlash /></a>
      </p>
      <p className="lead">
        Made with{" "}
        <span role="img" aria-label="jsx-a11y/accessible-emoji">
        💙
        </span>{" "}
        by, <a href="https://vsrihari.co/">V. Sri hari</a>
      </p>
    </footer>
  );
}
