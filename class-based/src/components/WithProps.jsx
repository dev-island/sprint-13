import React from "react";

class WithProps extends React.Component {
  constructor(props) {
    super(props);
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
        <p>This component has State and Props.</p>
        <p>Props: {JSON.stringify(this.props)} </p>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.incrementCount()}>Increment</button>
      </div>
    );
  }
}
export default WithProps;
