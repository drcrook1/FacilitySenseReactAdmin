import React from "react";

class FacilitiesView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div>
        <h2>Welcome to Facilities View Page</h2>
      </div>
    );
  }
}

export default FacilitiesView;
