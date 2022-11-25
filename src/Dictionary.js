import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        console.log(response.data[0].meanings[0].definitions[0].definition);
        setResults(response.data[0]);
    }

    function search() {
         //documentation: https://dictionaryapi.dev/
         let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
         console.log(apiUrl);
         axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }


    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
            <div className="Dictionary">
                <section>
                    <h1>What word do you want to look up?</h1>
                <form onSubmit={handleSubmit}>
                    <input type="search" autoFocus={true} onChange={handleKeywordChange} />
                </form>
                <div className="hint">
                suggested words: sunset, yoga, wine, milk...
                </div>
                </section>
                <Results results={results} />
               
            </div>
        );
       //<Results results={results} /> Results - this is the component name; results - this is the property name; results - this is the property value, state name 

    } else {
        load();
        return "Loading";
    }

}