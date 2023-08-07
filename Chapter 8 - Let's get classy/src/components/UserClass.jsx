import React from "react";

class UserClass extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      count1: 1,
      count2 : 2,
    }
  }

  render() {
    return (
      <div>
        <h1>Navjot Singh</h1>
        <h2>Using Functional Component</h2>
        <h3>{this.props.name}</h3>
        <h4>{this.state.count1}</h4>
        <h4>{this.state.count2}</h4>
      </div>
    );
  }
}

export default UserClass;
