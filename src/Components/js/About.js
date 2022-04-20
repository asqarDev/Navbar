import React, { Component } from "react";
import about from "./../css/About.module.css";
export default class About extends Component {
  render() {
    return (
      <div className="">
        <div className={about.aboutImage}>
          <h1>Hello About js</h1>
        </div>
      </div>
    );
  }
}
