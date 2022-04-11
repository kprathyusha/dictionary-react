import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <h5>{props.meaning.partOfSpeech}</h5>
            {props.meaning.definitions.map(function (definition, index) {
                return (
                    <div key={index}>
                        <div>
                            {definition.definition}
                            <br />
                            <em>{definition.example}</em>
                            <br />
                            <Synonyms synonyms={definition.synonyms} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
