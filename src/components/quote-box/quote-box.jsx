import React from "react";
import { Button, QuoteButton } from "../button/button";
import "./quote-box-styles.scss";

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: null,
      displayQuote: "null",
      displayAuthor: null,
    };
  }

  //   creating random number for quote api
  random = () => {
    return Math.floor(Math.random() * 1600);
  };

  //   fetching the quotes and assigning it to displayquote/author states
  async componentDidMount() {
    const response = await fetch("https://type.fit/api/quotes");
    const json = await response.json();
    this.setState({ quotes: json });
    const randomNum = this.random();
    this.setState({
      displayQuote: this.state.quotes[randomNum].text,
      displayAuthor: this.state.quotes[randomNum].author,
    });
  }

  handleChange = () => {
    const randomNum = this.random();
    this.setState({
      displayQuote: this.state.quotes[randomNum].text,
      displayAuthor: this.state.quotes[randomNum].author,
    });
  };

  render() {
    if (!this.state.quotes) {
      return (
        <div>
          <h1 style={{ textAlign: "center" }}>Loading...</h1>
        </div>
      );
    }

    return (
      <div className="wrapper">
        <div id="quote-box">
          <div className="writing">
            <h3 id="text">{this.state.displayQuote}</h3>
            <p id="author">{this.state.displayAuthor}</p>
          </div>
          <div id="button">
            <QuoteButton click={this.handleChange} />
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteBox;
