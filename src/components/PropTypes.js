import React, { Component } from "react";
import PTypes from "prop-types";
import PropItem from "./PropItem";

class PropTypes extends Component {
  /* Properties in türünü belirler. Örneğin ozellik properties i array değişkeni olarak gelecektir. */
  static propTypes = {
    ozellik: PTypes.array,
    name: PTypes.string,
  };
  render() {
    const els = this.props.ozellik.map((prp) => (
      <PropItem key={prp.id} title={prp.title} description={prp.description} />
    ));
    return (
      <div>
        {this.props.name}
        {els}
      </div>
    );
  }
}

export default PropTypes;
