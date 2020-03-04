import React, { useState } from "react";
import "./scss/App.scss";
import NewsBuilder from "./components/NewsBuilder";

function App() {
  
  const [showNews, showMoreNews] = useState(false)

  return (
    <div className="App">
      <div className="container-fluid">
        <NewsBuilder showNews={showNews} />
        <div className="row justify-content-start">
          <button className="app__showMoreNews" onClick={() => showMoreNews(prevState => !prevState)} >
            {!showNews ? "VISA FLER NYHETER" : "VISA FÄRRE NYHETER"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
