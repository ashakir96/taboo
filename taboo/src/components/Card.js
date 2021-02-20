import React from "react";

export default function Card (props) {
    const forbiddenWords = (words) => {
        let string = ""
        for (let i = 0; i < words.length; i++) {
            if (i < words.length - 1) {
                string = string + words[i] + ", ";
            } else if (i === words.length - 1) {
                string = string + words[i];
            }
        } return string;
    }
    return (
        <div>
            {props.word}: {forbiddenWords(props.forbidden)}
        </div>
    )
}