import React from 'react';

const NewQuote =({handleClick}) =>{
    return (
        <div>
            <button  
            id="new-quote"
            onClick={handleClick}
            >
            New quote
            </button>
        </div>
    );
};

export default NewQuote;