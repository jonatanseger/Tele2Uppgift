import React from "react";
import "./App.css";
import data from "./json/input.json";
import NewsComponent from "./NewsComponent";

//const to store input data as array
const inputData = data.articles;

//first 4 elements of array is of interest here
const firstNews = inputData.slice(0, 4);

//functional component to instruct NewsComponent what data to use
function FirstNews() {
  const newsComponent = firstNews.map(news => (
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
