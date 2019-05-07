import React, { Component } from "react";
import PropTypes from "prop-types";
import EndScore from "./endscore";
import Header from "./Header";
import "animate.css";
import "./style.css";

class GuessBoard extends Component {
  state = {
    words: this.props.words,
    currentWordIndex: 0,
    lettersMatched: false,
    inputValue: "",
    errorsCount: 0,
    isDone: false
  };

  handleChange = e => {
    const { words, currentWordIndex, errorsCount } = this.state;
    const input = e.target.value;
    const currentWord = words[currentWordIndex];

    // match last letter from current word and input word
    if (currentWord[input.length - 1] === input[input.length - 1]) {
      this.setState({
        letterMatched: true,
        inputValue: e.target.value
      });

      // if input value completes current word go to next word
      if (currentWord === input) {
        this.setState(prev => {
          return {
            currentWordIndex: prev.currentWordIndex + 1,
            inputValue: ""
          };
        });

        // check if current word is last of words
        if (currentWordIndex === words.length - 1) {
          this.setState({
            currentWordIndex: 0,
            isDone: true
          });
        }
      }
    } else {
      // if last letters not matched modify lettermatched to false
      if (errorsCount === 10) {
        this.gameOver();
      } else {
        this.setState(prev => {
          return {
            letterMatched: false,
            inputValue: prev.inputValue,
            errorsCount: prev.errorsCount + 1
          };
        });
      }
    }
  }; //handlechange ended

  restart = () => {
    this.setState({
      isDone: false,
      errorsCount: 0,
      currentWordIndex: 0,
      lettersMatched: false,
      inputValue: ""
    });
  };

  gameOver = () => {
    this.setState({
      isDone: true,
      currentWordIndex: 0
    });
  };

  // Get highlighted text
  getHighlightedText = () =>{
    const { words, currentWordIndex, inputValue } = this.state;
    const na = [...words[currentWordIndex]];
    return (na.map((letter, index) => 
      (letter === inputValue[index] ? 
      <span className="highlighted">{letter}</span>:
      letter)
    ));
  }

  render() {
    const {
      inputValue,
      letterMatched,
      isDone,
      errorsCount
    } = this.state;
    const errorBarStyles = { width: `${(errorsCount / 10) * 100}%` };
    return (
      <div className="wrapper">
        <Header style={errorBarStyles}/>
        <div className="wrapper-input">
          <h2 className="current-word">{this.getHighlightedText()}</h2>
          <input
            type="text"
            placeholder="type here"
            onChange={this.handleChange}
            value={inputValue}
            className={`animated ${!letterMatched ? "shake" : ""}`}
          />
        </div>
        {isDone || errorsCount >= 10 && 
          <EndScore onRestart={this.restart} />
        }
      </div>
    );
  }
}

GuessBoard.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string)
};

GuessBoard.defaultProps = {
  words: ["M.Subhan", "Ahmed"]
};

export default GuessBoard;
