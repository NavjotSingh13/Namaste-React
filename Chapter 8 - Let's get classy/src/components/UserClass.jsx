import React from "react";

class UserClass extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Navjot Singh</h1>
        <h2>Using Functional Component</h2>
        <h3>{this.props.name}</h3>
      </div>
    );
  }
}

export default UserClass;
