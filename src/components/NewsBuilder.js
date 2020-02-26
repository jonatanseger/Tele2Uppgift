import React from "react";
import "../App.css";
import data from "../json/input.json";
import News from "./News";

//const to store input data as array
const inputData = data.articles;

//functional component to instruct News what data to use
//numb of articles to render is informed by props.showX from parent (App.js)
//combined key to ensure uniqueness
function NewsBuilder(props) {
  const newsBuilder = inputData.slice(0, props.showX).map(news => (
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
