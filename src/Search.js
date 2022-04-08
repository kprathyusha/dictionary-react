import React, { useState } from "react";
import "./Search.css";

export default function Search() {
    let [keyword, setKeyword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        alert(`The word you are searching is ${keyword}`);
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
