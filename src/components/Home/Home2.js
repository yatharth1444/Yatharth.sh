import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/meYatharth.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Software Engineer with a hacker mindset, focused on building secure, 
              scalable systems across web, backend, and blockchain. I work at the intersection 
              of development and security, combining web app pentesting, and high-performance engineering.
              Passionate about resilient architectures, DeFi and ZK-powered 
              applications, and constantly refining my craft lately exploring Rust for performance,
              and the philosophy of building systems that endure.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, TypeScript, Rust, Node.js, and python{" "}
                </b>
              </i>
              — and I enjoy working with backend and web3.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Web Applications, Dapps,{" "}
                </b>
              </i>
              and exploring new ways to bridge on-chain and off-chain systems.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Next.js</b>.
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
