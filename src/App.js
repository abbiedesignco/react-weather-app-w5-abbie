import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Weather defaultCity="Montreal" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.abbiericher.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abbie Richer
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/abbiedesignco/react-weather-app-w5-abbie"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://sweet-malasada-7a8370.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
