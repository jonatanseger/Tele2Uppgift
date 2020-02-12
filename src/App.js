import React from "react";
import "./App.css";
import FurtherNews from "./FurtherNews";
import News from "./News";

class App extends React.Component {
  constructor() {
    super();

    //initial state, only show first 4 news articles
    this.state = {
      displayMore: false
    };

    //handle state when 'showMoreBtn' is clicked
    this.displayMoreNews = () => {
      this.setState({
        displayMore: !this.state.displayMore
      });
    };
  }

  //we always render <News /> when component mounts, <FurtherNews
  //is rendered when we change the state of displayMore to true
  //button changes text depending on displayMore is true or not
  render() {
    return (
      <div className="App">
        <News />
        {this.state.displayMore ? <FurtherNews /> : <div></div>}
        <button className="showMoreBtn" onClick={this.displayMoreNews}>
          {this.state.displayMore ? "VISA FÄRRE NYHETER" : "VISA FLER NYHETER"}
        </button>
      </div>
    );
  }
}

export default App;
