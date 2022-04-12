import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <h5 className="Word text-capitalize">
                {props.meaning.partOfSpeech}
            </h5>
            {props.meaning.definitions.map(function (definition, index) {
                return (
                    <div key={index}>
                        <div className="def">
                            {definition.definition}
                            <br />
                            <em>{definition.example}</em>
                            <br />
                        </div>
                    </div>
                );
            })}
            <Synonyms synonyms={props.meaning.synonyms} />
        </div>
    );
}
