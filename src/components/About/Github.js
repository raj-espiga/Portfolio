import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "black",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Days I <strong className="blue">Code</strong>
      </h1>
      <GitHubCalendar
        username="raj-espiga"
        blockSize={30}
        blockMargin={10}
        color="#1e40af"
        fontSize={20}
      />
    </Row>
  );
}

export default Github;
