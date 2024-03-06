import React from "react";


class UserClass extends React.Component {
    constructor(props){
        super(props)
        console.log("child constructor")
        this.state = {
            count: 1
        }
    }

    componentDidMount(){
        console.log("child component")
    }
  render() {
    console.log("child render")
    return (
      <div className="user-card">
        <h1>Name: {this.props.name}</h1>
        <h2>count : {this.state.count}</h2>
        <button onClick={()=>{
            this.setState({count: this.state.count+1})
        }}>count increase</button>
        <h2>Location: {this.props.location}</h2>
        <h3>Contact</h3>
      </div>
    );
  }
}

export default UserClass;
