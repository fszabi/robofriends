import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1 className="font-mono text-[#0ccac4] text-6xl font-bold uppercase">
          Oooops. That is not good
        </h1>
      );
    }

    return this.props.children;
  }
}
