import User from "./User";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent component");
  }
  render() {
    console.log("parent render");
    return (
      <div className="about-container">
        <div>
          <h1>This is about page</h1>
          <h2>We have just started</h2>
          <div>
            <User name={"Abhi"} location={"Calicut"} />{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default About;
