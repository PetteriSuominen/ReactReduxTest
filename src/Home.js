import React from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/about">About</Link>
        <Link to="/form">Form</Link>
      </header>
    </div>
  );
};

export default Home;
