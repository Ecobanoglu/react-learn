import React, { Component } from "react";

class PropItem extends Component {
  render() {
    /* props ile değişkenler aktarılır */
    //console.log(this.props);

    /*Bu şekilde props lar değişkene atanabilir. Aynı isim olması gerekiyor. */
    const { title, description } = this.props;
    return (
      <div>
        <h1 className="title">{title}</h1>
        <p>{description}</p>
      </div>
    );
  }
}

export default PropItem;
