import { Component } from "react";

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      time: 0
    };
    this.time = null;
    console.log("TimerOne constructor");
  }

  static getDerivedStateFromProps() {
    console.log("TimerOne getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.state.time);
    return nextProps.timerOn !== this.props.timerOn || nextState.time % 5 === 0;
    console.log("TimerOn ShouldComponentUpdate");
    return true;
  }
  render() {
    console.log("TimerOne render");
    return (
      <>
        <h1>
          Time Spent{" "}
          {new Date(this.state.time * 1000).toISOString().slice(11, 19)}
        </h1>
      </>
    );
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("TimerOne getSnapshotBeforeUpdate");
    return 5;
  }
  componentDidMount() {
    console.log("TimerOn ComponentDidMount");
  }
  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log("Timer componentDidUpdate");
    console.log("----------------------------");

    // console.log("Previous props :", prevProps);
    // console.log("previousState :", prevState);
    // console.log("SnapShot from getSnapShotBeforeUpdate :", snapShot);

    // console.log("----------------------------");

    if (prevProps.timerOn !== this.props.timerOn) {
      if (this.props.timerOn) {
        this.timer = setInterval(() => {
          this.setState((prevState) => ({
            time: prevState.time + 1
          }));
        }, 1000);
      } else {
        clearInterval(this.timer);
      }
    }
  }
  componentWillUnmount() {
    console.log("TimerOne componentWillUnmount");
    console.log("-------------------------------");
    clearInterval(this.timer);
  }
}

export default Timer;
