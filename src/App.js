import { Component } from "react";
import "./App.css";
import QuoteBox from "./components/quote-box/quote-box";

class App extends Component {
  constructor() {
    super();
    this.state = {
      backG: null,
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
      <div className="App" style={{ backgroundColor: this.state.backG }}>
        <QuoteBox id="quote" handler={this.bgChange} />
      </div>
    );
  }
}

export default App;
