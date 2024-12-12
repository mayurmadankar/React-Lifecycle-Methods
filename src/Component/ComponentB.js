import { Component } from "react";

class ComponentB extends Component {
  constructor() {
    super();
    this.state = {
      name: "ComponentB"
    };

    console.log("ComponentB Contructor");
  }
  static getDerivedStateFromProps() {
    console.log("ComponentB getDerivedStateProps");
    return null;
  }
  componentDidMount() {
    console.log("ComponentB componentDidMount");
  }
  render() {
    console.log("ComponentB Render");
    return <h2>{this.state.name}</h2>;
  }
}
export default ComponentB;
