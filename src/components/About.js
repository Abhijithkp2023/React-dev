import User from "./User";
import React from "react";
import userContext from "../utils/userContext";

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
      <div className="text-center p-4 m -4">
        <div>
          <h1>This is about page</h1>
          <h2>We have just started</h2>
          <div>
            <User name={"Abhi"} location={"Calicut"} />{" "}
          </div>
          <div>
            User :
            <userContext.Consumer>
              {({ loggedInUser }) => (
                <h1 className="font-bold">{loggedInUser}</h1>
              )}
            </userContext.Consumer>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
