import React from "react";
import "./Photos.css";

export default function Photos(props) {
    if (props.photos) {
        console.log(props.photos);
        return (
            <section className="Photos">
                {props.photos.map(function (photo, index) {
                    return <img src={photo.src.small} key={index} />;
                })}
            </section>
        );
    } else {
        return null;
    }
}
