import { Component } from "react";
// import ComponentB from "./ComponentB";

class ComponentA extends Component {
  constructor() {
    super();
    this.state = {
      name: "ComponentA",
      data: []
    };

    console.log("ComponentA Contructor");
  }
  static getDerivedStateFromProps() {
    console.log("ComponentA getDerivedStateProps");
    return null;
  }
  //   https://jsonplaceholder.typicode.com/users/1
  componentDidMount() {
    console.log("ComponentA componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }
  render() {
    return (
      <>
        <h1>{this.state.name}</h1>
        <ul>
          {this.state.data.map((d) => {
            return <li>{d.username}</li>;
          })}
        </ul>
      </>
    );
  }
}
export default ComponentA;
