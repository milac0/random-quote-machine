import React from 'react';

const Twitter = (props) =>{
    return (
        <div>
          <a  
          id="tweet-quote" 
          href={encodeURI(`https://twitter.com/intent/tweet?text="${props.quote}"${props.author}`)}>
          twitter
          </a>
        </div>
    );
};

export default Twitter;