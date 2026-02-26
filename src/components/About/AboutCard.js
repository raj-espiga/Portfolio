import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="blue">Ryx Anthony Espiga</span> from Nasipit, ADN. <br/>
            I graduated Bachelor of Science in Information Technology at <span className="blue">Saint Michael College Of Caraga</span>. <br/><br/>

            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Online/Offline Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies and TV Shows
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places
            </li>
          </ul>

          <p style={{ color: "rgba(49, 87, 209, 1)" }}>
            <br/>"Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rajesh Acharya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
