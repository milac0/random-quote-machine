import React from 'react';
import Quote from './Quote';
import Author from './Author';
import Twitter from './Twitter';
import Tumblr from './Tumblr';
import NewQuote from './NewQuote';
import QuoteData from './quotes.json';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      messages: QuoteData,
      output: {}
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount () {
    this.handleClick();
  };

  handleClick () {
    const random = Math.floor(Math.random()*(this.state.messages.length-1));
    this.setState ( () => ({
      output: this.state.messages[random],
      messages: this.state.messages.filter((elem) => elem !== this.state.messages[random])
    }))
  };

  render(){
  return (
    <div id="quote-box">
      <Quote quote={this.state.output.quote}/>
      <Author author={this.state.output.author}/>
        <Twitter
        quote={this.state.output.quote}
        author={this.state.output.author}
        />
        <Tumblr />
      <NewQuote handleClick={this.handleClick}/>
    </div>
  );}
}

export default App;
