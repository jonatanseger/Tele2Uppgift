import React from "react";
import "./App.css";
import data from "./json/input.json";
import NewsComponent from "./NewsComponent";

const inputData = data.articles;

const first = inputData.slice(4);

function FirstNews() {
  const newsComponent = first.map(news => (
    <NewsComponent
      key={news.title}
      image={news.image}
      title={news.title}
      date={news.date}
      teaser={news.teaser}
    />
  ));
  return <div className="newsContainers">{newsComponent}</div>;
}

export default FirstNews;
