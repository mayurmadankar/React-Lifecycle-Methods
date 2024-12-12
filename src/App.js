import { Component } from "react";
import Timer from "./Timer/timerOne";
import ComponentA from "./Component/ComponentA";
import ErrorBoundary from "./ErrorBoundary";
import ComponentB from "./Component/ComponentB";

class App extends Component {
  constructor() {
    super();
    this.state = {
      timeron: false
    };
  }
  handletimeron = () => {
    this.setState((prevState) => ({ timeron: !prevState.timeron }));
  };
  render() {
    return (
      <>
        <Timer timerOn={this.state.timeron} />
        <button onClick={this.handletimeron}>
          {this.state.timeron ? "STOP" : "START"}
        </button>
        {/* {this.state.timeron ? <Timer /> : null} */}

        <ErrorBoundary>
          <ComponentA />
        </ErrorBoundary>
        <ErrorBoundary>
          <ComponentB />
        </ErrorBoundary>
      </>
    );
  }
}
export default App;
