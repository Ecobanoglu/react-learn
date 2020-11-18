import React, { Component } from "react";
import NewsItem from "./NewsItem";

class News extends Component {
  render() {
    const title = "React Title";
    const description = "React Description";
    return (
      <div className="news">
        <NewsItem title={title} description={description} />
      </div>
    );
  }
}

export default News;
