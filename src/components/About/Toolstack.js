import React from "react";
import { Col, Row } from "react-bootstrap";
import windows from "../../Assets/TechIcons/windows.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import windsurf from "../../Assets/TechIcons/windsurf.svg";
import cursorAi from "../../Assets/TechIcons/cursor-ai-code-icon.svg";
import linux from "../../Assets/TechIcons/linux.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={windows} alt="windows" className="tech-icon-images" />
        <div className="tech-icons-text">Windows</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={linux} alt="linux" className="tech-icon-images" />
        <div className="tech-icons-text">Linux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={windsurf} alt="windsurf" className="tech-icon-images" />
        <div className="tech-icons-text">Windsurf</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={cursorAi} alt="cursor-ai" className="tech-icon-images" />
        <div className="tech-icons-text">Cursor</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
