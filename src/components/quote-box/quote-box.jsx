import React from "react";
import { QuoteButton } from "../button/button";
import "./quote-box-styles.scss";

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: null,
      displayQuote: null,
      displayAuthor: null,
      color: ["#264653", "#2a9d8f", "#e76f51", "#e63946", "#bc6c25"],
      backGroundApp: [
        "#ffadad",
        "#ffd6a5",
        "#caffbf",
        "#9bf6ff",
        "#a0c4ff",
        "#ffc6ff",
      ],
    };
  }

  //   creating random number for quote api
  random = () => {
    return Math.floor(Math.random() * 1600);
  };

  // creating random number for background
  random2 = () => {
    return Math.floor(Math.random() * 4);
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
    this.props.handler(this.state.backGroundApp[this.random2()]);
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
        <div
          id="quote-box"
          style={{
            transition: "background-color 0.3s ease",
            backgroundColor: this.state.color[this.random2()],
          }}
        >
          <div className="writing">
            <h3 id="text">{this.state.displayQuote}</h3>
            <p id="author">{this.state.displayAuthor}</p>
          </div>
          <div id="new-quote">
            <QuoteButton
              click={this.handleChange}
              text="New Quote"
              variant="success"
            />
          </div>
          <div id="tweet">
            <QuoteButton
              href={`https://twitter.com/intent/tweet?text=${this.state.displayQuote} 
              
              ${this.state.displayAuthor}`}
              text={
                <a
                  id="tweet-quote"
                  target="_blank"
                  rel="noreferrer"
                  href={`https://twitter.com/intent/tweet?text=${this.state.displayQuote} 
              
              ${this.state.displayAuthor}`}
                >
                  Tweet
                </a>
              }
              variant="primary"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteBox;
