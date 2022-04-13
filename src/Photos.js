import React from "react";
import "./Photos.css";

export default function Photos(props) {
    if (props.photos) {
        console.log(props.photos);
        return (
            <section className="Photos">
                <div className="row">
                    {props.photos.map(function (photo, index) {
                        return (
                            <img
                                src={photo.src.landscape}
                                alt="img not available"
                                key={index}
                            />
                        );
                    })}
                </div>
            </section>
        );
    } else {
        return null;
    }
}
