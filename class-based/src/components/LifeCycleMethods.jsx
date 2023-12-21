import { Component } from 'react';

class LifeCycleMethods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log('Component mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component updated', { prevProps, prevState });
    if (prevState.count !== this.state.count) {
      console.log('Count changed');
    }
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    console.log('Component rendered');
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default LifeCycleMethods;
