import React from "react";
import "./scss/App.scss";
import NewsBuilder from "./components/NewsBuilder";

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      showMore: false
    };

    this.displayNews = () => {
      this.setState({
        showMore: !this.state.showMore
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <NewsBuilder showMore={this.state.showMore} />
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
