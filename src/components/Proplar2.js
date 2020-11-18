import React, { Component } from "react";

import PropItem from "./PropItem";

class Proplar2 extends Component {
  render() {
    return (
      <div>
        {this.props.ozellik.map((prp) => (
          <PropItem title={prp.title} description={prp.description} />
        ))}
      </div>
    );
  }
}

export default Proplar2;
