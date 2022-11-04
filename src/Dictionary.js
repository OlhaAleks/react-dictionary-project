import React, { useState } from "react";
import "./Dictionary.css"

export default function Dictionary() {
    let [keyword, setKeyword] = useState(null);

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword} definition`);
    }

    return (
        <div className="">
            <form onSubmit={search}>
                <input type="search" autoFocus={true} onChange={handleKeywordChange} />
            </form>
        </div>
    );
}