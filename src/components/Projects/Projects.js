import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pentest from "../../Assets/Projects/vpentest-hacker.png";
import podster from "../../Assets/Projects/podster.png";
import cyscraper from "../../Assets/Projects/cyscrapperr.png";
import fundus from "../../Assets/Projects/fundus.png";
import sentinel from "../../Assets/Projects/sentinel.png";
import ghostpass from "../../Assets/Projects/ghostpasss.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fundus}
              isBlog={false}
              title="Fundus"
              description="Fundus is a full-stack crowdfunding dApp built with Next.js and a Rust-based smart contract deployed using Anchor on Solana. It enables users to create and fund campaigns through wallet-driven interactions, combining a modern web interface with on-chain logic. The project focuses on bridging Web2 usability with Web3 infrastructure, showcasing end-to-end dApp architecture, contract deployment, and secure blockchain interaction."
              ghLink="https://github.com/yatharth1444/funduss"
              demoLink="https://fundus-78zt.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ghostpass}
              isBlog={false}
              title="Ghostpass"
              description="GhostPass is a modern, minimalist command-line password manager built in Rust. It offers cutting-edge zero-residency security principles, ensuring your sensitive secrets never linger in memory or disk unencrypted. Designed for privacy, usability, and resilience, GhostPass stands apart from traditional password managers by guaranteeing that nothing is ever left behind."
              ghLink="https://github.com/yatharth1444/GhostPass"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cyscraper}
              isBlog={false}
              title="CyScraper"
              description="CyScraper is an AI-powered scraping platform built to extract structured data from complex, dynamic websites using browser automation and LLM-assisted parsing. It uses Playwright and AI models to interpret content and run locally in lightweight environments. Focused on automation, stealth, and structured exports, it supports research, intelligence gathering, and real-world data pipelines."
              ghLink="https://github.com/yatharth1444/cyscraper"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pentest}
              isBlog={false}
              title="Pentesters Flame"
              description="Pentesters Flame is an all-in-one penetration testing toolkit designed for automated security assessments and vulnerability discovery. It combines information gathering, scanning, exploitation, and post-exploitation into a single streamlined workflow. Built with Python and a modular architecture, it delivers structured scans, intelligent payloads, and customizable reporting with HTML and JSON exports. Focused on practical offensive security, it supports stealth automation and flexible testing for researchers and security professionals."
              ghLink="https://github.com/yatharth1444/pentesters-flame"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sentinel}
              isBlog={false}
              title="Sentinel Header"
              description="SentinelHeader is a command-line security scanner designed to analyze websites for critical HTTP security headers and SSL configuration issues. It automates header inspection, detects weak or missing policies. Built with Node.js and a CLI-first architecture, it provides structured analysis, instant configuration fixes for Nginx, Apache, and Express.js, and clear terminal output for quick assessments. Focused on practical web security, it supports fast audits, recon workflows, and developer-friendly hardening of real-world applications."
              ghLink="https://github.com/yatharth1444/SentinelHeader"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={podster}
              isBlog={false}
              title="Podster"
              description="Solves the problem of low-quality remote podcast and video recordings by enabling local HD (1080p) video and 48kHz audio capture directly in the browser, ensuring studio-grade output even with unstable internet. Built a scalable, real-time recording and collaboration platform using LiveKit, React, and Cloudflare R2, handling multi-user sessions, secure cloud storage, and seamless guest onboarding for professional content creation"
              demoLink="https://podster.in/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
