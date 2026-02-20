import React from "react";
import { Col, Row } from "react-bootstrap";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";
import Burpsuite from "../../Assets/TechIcons/burpsuite-logo.webp";
import Wireshark from "../../Assets/TechIcons/wireshark-logo.webp";
import Anchor from "../../Assets/TechIcons/anchor.webp";
import nmap from "../../Assets/TechIcons/nmap.webp"
import AWS from "../../Assets/TechIcons/AWS.svg";
import Hardhat from "../../Assets/TechIcons/Hardhatt.webp";
import Linux from "../../Assets/TechIcons/Linux.webp";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Linux} alt="macOs" className="tech-icon-images" />
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
        <img src={Hardhat} alt="go" className="tech-icon-images" />
        <div className="tech-icons-text">Hardhat</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={Burpsuite} alt="go" className="tech-icon-images" />
        <div className="tech-icons-text">Burpsuite</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={Wireshark} alt="go" className="tech-icon-images" />
        <div className="tech-icons-text">Wireshark</div>
      </Col>
       <Col xs={4} md={2} className="tech-icons ">
        <img src={Anchor} alt="go" className="tech-icon-images" />
        <div className="tech-icons-text">Anchor</div>
      </Col>
       <Col xs={4} md={2} className="tech-icons ">
        <img src={nmap} alt="go" className="tech-icon-images" />
        <div className="tech-icons-text">nmap</div>
      </Col>
       <Col xs={4} md={2} className="tech-icons ">
        <img src={AWS} alt="go" className="tech-icon-images" />
        <div className="tech-icons-text">AWS</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
