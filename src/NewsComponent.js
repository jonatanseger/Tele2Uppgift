import React from "react";
import "./App.css";

//takes in relevant data as props and returns a div with appropriate data
function NewsComponent(props) {
  return (
    <div className="newsContainer">
      <img src={props.image} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.date}</h4>
      <h5>{props.teaser}</h5>
      <button>LÄS MER ></button>
    </div>
  );
}
export default NewsComponent;
