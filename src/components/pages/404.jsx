import React from "react";

class NotFoundPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h2>404 - Not Found - Whoopsies!</h2>
        <p>It is {this.state.date.toLocaleTimeString()}.</p>
      </div>
    );
  }
}

export default NotFoundPage;
