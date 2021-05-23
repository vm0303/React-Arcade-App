import React from "react";
import "./Home.css";
import aGif from "./Arcade.gif";

const Home = () => (
  <div>
    <h1>Welcome to React Arcade!</h1>
    <p>The arcade for Computer Science games</p>
    <img
      src={aGif}
      alt="Arcade gif"
      title="A picture of a boy playing in an arcade"
    />
  </div>
);

export default Home;
