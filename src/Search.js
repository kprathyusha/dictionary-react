import axios from "axios";
import React, { useState } from "react";
import "./Search.css";
import Results from "./Results";

export default function Search() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function showResult(response) {
        console.log(response.data);
        setResults(response.data[0]);
        // console.log(response.data[0].meanings[0].definitions[0].definition);
    }

    function handleSubmit(event) {
        event.preventDefault();
        // alert(`The word you are searching is ${keyword}`);

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(showResult);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div>
            <div className="Search">
                <h1>Dictionary</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="search"
                        placeholder="Enter a word"
                        onChange={handleKeywordChange}
                    />
                </form>
                <Results results={results} />
            </div>
        </div>
    );
}
