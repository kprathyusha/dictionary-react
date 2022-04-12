import React from "react";

export default function Phonetics(props) {
    console.log(props.phonetics);
    console.log(props.phonetics.text);
    //return `hello from ${props.phonetics.text}`;
    if (props.phonetics.audio) {
    return (
        <div className="Phonetics">
            <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
                Listen
            </a>{" "}
            {props.phonetics.text}
        </div>
    );
}
}
