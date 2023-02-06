import React from "react";

let interval;

class CounterWithClass extends React.Component {
  state = {
    number: this.props.startNumber || 0
  };

  increase() {
    this.setState({ number: this.state.number + 1 });
  }

  decrease() {
    this.setState({
      number: this.state.number - 1
    });
  }

  componentDidMount() {
    console.log("Mounted");
    interval = setInterval(() => {
      this.setState({
        number: this.state.number + 5
      });
      console.log(this.state.number);
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(interval);
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.startNumber !== prevProps.startNumber &&
      !this.props.startNumber
    ) {
      this.setState({
        number: 0
      });
    } else if (
      this.props.startNumber !== prevProps.startNumber &&
      this.props.startNumber
    ) {
      this.setState({
        number: this.props.startNumber
      });
    }
  }

  render() {
    return (
      <div className="Counter">
        <h2>Counter</h2>
        <button onClick={() => this.decrease()}>Decrease</button>
        <br />
        <span>{this.state.number}</span>
        <br />
        <button onClick={() => this.increase()}>Increase</button>
      </div>
    );
  }
}

export default CounterWithClass;
