import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Yatharth Singh</span>{" "}
            from <span className="purple">Ghaziabad, India</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Software Developer</span> at{" "}
            <span className="purple">Privy</span>.
            <br />I hold an B.Tech in{" "}
            <span className="purple">Computer Science Engineering</span> from{" "}
            <span className="purple">KIET Group of Institutions</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Soccer ⚽
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Pleasure in the job puts perfection in the work."{""}
          </p>
          <footer className="blockquote-footer">Aristotle</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
