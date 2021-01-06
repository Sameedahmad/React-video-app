import React , {useState} from 'react'

const SearchBar = (props) => {

    const [term, setTerm] = useState("")

    function onInputChange(e){
setTerm(e.target.value)
    };

    function onFormSubmit(e){
     props.onTermSubmit(term)
        e.preventDefault();
    }
    return (
        <div className="ui segment search-bar">
        <form onSubmit={onFormSubmit} className="ui form">
           <div className="ui field">
               
               <input 
               placeholder="Search..."
               value={term} 
               onChange={onInputChange}
               type="text"/>
           </div>
        </form>
            
        </div>

// NEWSEARCHBAR




    )
}

export default SearchBar;

