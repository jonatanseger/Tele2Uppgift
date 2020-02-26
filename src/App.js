import React from "react";
import "./App.css";
import NewsBuilder from "./NewsBuilder";
//import { withSize } from "react-sizeme";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showX: 4,
      showMore: false
    };

    this.displayNews = () => {
      !this.state.showMore ? 
      this.setState({
        showX: this.state.showX + 6,
        showMore: true
      }) :
      this.setState({
        showX: this.state.showX - 6,
        showMore: false
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <NewsBuilder showX={this.state.showX} />
          <div className="row justify-content-start">
            <button className="app__showMoreNews" onClick={this.displayNews} >
              {!this.state.showMore ? "VISA FLER NYHETER" : "VISA FÄRRE NYHETER"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
