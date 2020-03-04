import React from "react";
import "../scss/App.scss";
import data from "../json/input.json";
import News from "./News";

//create an array based on the json file
const inputData = data.articles;

//NewsBuilder is told how many articles to be built (showX)
//A key and the data for each article is passed to News

function NewsBuilder(props) {
  const showX = props.showNews ? inputData.length : 4;
  const newsBuilder = inputData.slice(0, showX).map(news => (
    <News
      key={news.title + news.date}
      image={news.image}
      title={news.title}
      date={news.date}
      teaser={news.teaser}
    />
  ));
  return (
    <div className="row justify-content-start no-gutters">
      {newsBuilder}
    </div>
    );
}

export default NewsBuilder;