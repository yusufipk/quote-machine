import React from "react";
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

  random = () => {
    return Math.floor(Math.random() * 1600);
  };

  async componentDidMount() {
    const response = await fetch("https://type.fit/api/quotes");
    const json = await response.json();
    await this.setState({ quotes: json });
    const randomNum = this.random();
    await this.setState({
      displayQuote: this.state.quotes[randomNum].text,
      displayAuthor: this.state.quotes[randomNum].author,
    });
  }
  render() {
    if (!this.state.quotes) {
      return <div>Loading...</div>;
    }

    return (
      <div className="wrapper">
        <div id="quote-box">
          <h3 id="text">{this.state.displayQuote}</h3>
          <p id="author"> {this.state.displayAuthor} </p>
          {/* new quote button */}
        </div>
      </div>
    );
  }
}

export default QuoteBox;
