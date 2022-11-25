import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";

export default function Phonetic(props) {
    //player to https://www.npmjs.com/package/react-audio-player
    return (
        <div className="Phonetic">
            <ReactAudioPlayer
            src={props.phonetic.audio}
            controls
/>

            <br />
            {props.phonetic.text}
        </div>
    );
}