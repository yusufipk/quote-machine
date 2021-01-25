import { Component } from "react";
import "./App.css";
import QuoteBox from "./components/quote-box/quote-box";

class App extends Component {
  constructor() {
    super();
    this.state = {
      backG: "#2a9d8f",
    };
  }

  // getting the background from quote-box
  bgChange = (e) => {
    this.setState({
      backG: e,
    });
  };

  render() {
    return (
      <div
        className="App"
        style={{
          transition: "background-color 0.3s ease",
          backgroundColor: this.state.backG,
        }}
      >
        <QuoteBox id="quote" handler={this.bgChange} />
      </div>
    );
  }
}

export default App;
