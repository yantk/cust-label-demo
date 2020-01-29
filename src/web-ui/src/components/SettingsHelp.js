import React from "react";
import { Alert, Row } from "react-bootstrap";

export default ({ show }) => {
  if (show) {
    return (
      <Row>
        <Alert bsStyle="danger">
          There is an issue with your settings configuration. If you are running
          the front-end code from your local machine, you may need to follow{" "}
          <a
            href="https://github.com/yantk/cust-label-demo/blob/master/CONTRIBUTING.md#working-with-the-web-ui"
            rel="noopener noreferrer"
            target="_blank"
          >
            this guide
          </a>
          .
        </Alert>
      </Row>
    );
  }
  return "";
};
