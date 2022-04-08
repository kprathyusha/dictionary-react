import axios from "axios";
import React, { useState } from "react";
import "./Search.css";

export default function Search() {
    let [keyword, setKeyword] = useState("");

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(showResult);

    function showResult(response) {
        console.log(response.data);
    }

    function handleSubmit(event) {
        event.preventDefault();
        // alert(`The word you are searching is ${keyword}`);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Search">
            <h1>Dictionary</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="search"
                    placeholder="Enter a word"
                    onChange={handleKeywordChange}
                />
            </form>
        </div>
    );
}
