import React from "react";
import "./footer.css";
const Footer = () => (
  <footer className="footer bottom">
    <p
      style={{ color: "whitesmoke" }}
      title="I put a copyright here so you would know where I got most of my code from while doing the Towers of Hanoi program"
    >
      &copy; 2021 from
      <a
        style={{ color: "darkblue" }}
        target="_blank"
        href="https://blog.logrocket.com/using-react-dnd-to-create-a-tower-of-hanoi-game/"
      >
        LogRocket and
      </a>
      <a
        style={{ color: "darkblue" }}
        target="_blank"
        href="https://blog.logrocket.com/using-react-dnd-to-create-a-tower-of-hanoi-game/"
      >
        React Dnd Example from Sandbox
      </a>
    </p>
    <p style={{ color: "whitesmoke" }}>
      Edited and re-created by Vishal Madhav
    </p>
  </footer>
);

export default Footer;
