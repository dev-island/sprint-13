import React from "react";

class WithState extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }

  render() {
    return (
      <div>
        <p>This component has state.</p>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.incrementCount()}>Increment</button>
      </div>
    );
  }
}
export default WithState;
