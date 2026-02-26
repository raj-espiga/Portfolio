import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Ravatar.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="blue">INTRODUCE</span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a <b className="blue">Software Developer</b> who enjoys turning ideas into reliable, scalable, and production-ready systems. I focus on building products that balance strong system design with practical user experience—tools that are efficient, maintainable, and built to grow.
              <br />
              <br />
              Beyond implementation, I focus on building
              <i>
                <b className="blue">
                  {" "}
                  secure systems{" "}
                </b>
              </i>
              with an interest in <b className="blue">cybersecurity</b> and entry-level <b className="blue">Vulnerability Assessment and Penetration Testing</b> practices. I also think like a founder; balancing security, speed, cost, and scalability while building MVPs and platforms designed to grow with real users.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="blue"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="blue">React.js</b> and{" "}
                <b className="blue">Next.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
