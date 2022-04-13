import axios from "axios";
import React, { useState } from "react";
import "./Search.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Search() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);

    function showResult(response) {
        
        setResults(response.data[0]);
        
    }

    function handlePexelsResponse(response) {
              setPhotos(response.data.photos);
    }

    function handleSubmit(event) {
        event.preventDefault();
        
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(showResult);

        const pexelsApikey =
            "563492ad6f917000010000017bc55a9495c24e6bb52145e7f9564f1b";
        let pexelsApiurl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=5`;
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
                <div className="row">
                    <div className="col-md-8">
                        <Results results={results} />
                    </div>
                    <div className="col-md-4">
                        <Photos photos={photos} />
                    </div>
                </div>
            </div>
        </div>
    );
}
