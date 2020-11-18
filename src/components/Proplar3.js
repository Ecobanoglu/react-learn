import React, { Component } from "react";

import PropItem from "./PropItem";

class Proplar3 extends Component {
  render() {
    const els = this.props.ozellik.map((prp) => (
      <PropItem key={prp.id} title={prp.title} description={prp.description} />
    ));
    return <div>{els}</div>;
  }
}

export default Proplar3;
