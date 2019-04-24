import React from 'react';
import Quote from './Quote';
import Author from './Author';
import Twitter from './Twitter';
import Tumblr from './Tumblr';
import NewQuote from './NewQuote';
import { random } from 'lodash';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      messages: [],
      output: {}
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount () {
    fetch('https://gist.githubusercontent.com/shreyasminocha/7d5dedafc1fe158f82563c1223855177/raw/325d51aca7165b2498971afcff9bed286a52dc0e/quotes.json')
    .then(data => data.json())
    .then(data => this.setState( ()=>
     ({messages: data,
      output: data[random(0,data.length-1)]})));
  };

  handleClick () {
        this.setState ( () => ({
      output: this.state.messages[random(0,this.state.messages.length-1)],
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
