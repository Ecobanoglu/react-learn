import React, { Component } from "react";

import PropItem from "./PropItem";

export class Props extends Component {
  render() {
    const proplar = [
      {
        id: 1,
        title: "Başlık 1",
        description: "Açıklama 1",
      },
      {
        id: 2,
        title: "Başlık 2",
        description: "Açıklama 2",
      },
    ];
    return (
      <div>
        <PropItem
          title={proplar[0].title}
          description={proplar[0].description}
        />
        <PropItem
          title={proplar[1].title}
          description={proplar[1].description}
        />
      </div>
    );
  }
}

export default Props;
