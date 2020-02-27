import React from "react";
import "../scss/App.scss";
import arrow from "../png/btn__arrow.png";

//News puts together each article with the relevant data
function News(props) {
  return (
      <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
        <div className="news">
          <img className="news__image" src={props.image} alt="News" />
          <h2 className="news__title">{props.title}</h2>
          <hr className="news__line"></hr>
          <h4 className="news__date">{props.date}</h4>
          <h5 className="news__teaser">{props.teaser}</h5>
          <button className="news__button">
            <h3>LÄS MER</h3>
            <img className="news__button__arrow" src={arrow} alt=">"/>
          </button>
        </div>
      </div>
  );
}
export default News;
