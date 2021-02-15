import React from "react";

import ContentComponent from "components/Content/Content";

class ContentContainer extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const {} = this.state;

    return (
      <div>
        <ContentComponent />
      </div>
    );
  }
}

export default ContentContainer;
