import axios from "axios";
import React, { useState } from "react";
import "./Search.css";
import Results from "./Results";

export default function Search() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function showResult(response) {
        //console.log(response.data);
        setResults(response.data[0]);
        // console.log(response.data[0].meanings[0].definitions[0].definition);
    }

    function handlePexelsResponse(response) {
        console.log(response.data);
    }

    function handleSubmit(event) {
        event.preventDefault();
        // alert(`The word you are searching is ${keyword}`);

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(showResult);

        const pexelsApikey =
            "563492ad6f917000010000017bc55a9495c24e6bb52145e7f9564f1b";
        let pexelsApiurl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
        let headers = { Authorization: `Bearer ${pexelsApikey}` };
        axios
            .get(pexelsApiurl, { headers: headers })
            .then(handlePexelsResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div>
            <div className="Search">
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
