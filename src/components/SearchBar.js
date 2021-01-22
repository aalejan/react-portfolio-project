import React, { useState} from 'react'
import './SearchBar.css'


const SearchBar = () => {
    const [text, setText] = useState('')

   const  onSubmit = (event) => {
        event.preventDefault();       
    };

    return ( 
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label >Enter Text Here:</label>
                    <input type="text" value={text} onChange={(event) => setText(event.target.value)}/>  
                </div>
                <button class="ui primary button">
                        Translate
                </button>
            </form>
        </div>
    )

}

export default SearchBar