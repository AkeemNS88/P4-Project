import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Typewriter from "typewriter-effect";
import intro from "./Encounters/beginning.jpg"
import { useNavigate } from "react-router-dom";
import LucianEncounter from "./LucianEncounter";
import { useState, useEffect } from "react";

function Begin() {
    let navigate = useNavigate();

    function handleClick(e){
        e.preventDefault()
        navigate("/lucian")
    }
    
        
    return (
        <div>
            <div className="welcome">
                <h1 className="welcome">New Beginnings</h1>
            </div>
            <div>
                <img className="encounter-image" src={intro} />
            </div>
            <div className="text-holder">

                <div className="char-text">
                    <Typewriter

                        onInit={(typewriter) => {

                            typewriter

                                .changeDelay(50)
                                .typeString("You are hunting for someone. ")
                                .pauseFor(1000)
                                .typeString("Someone who has wronged you. ")
                                .pauseFor(1000)
                                .typeString("Many years ago, this person took something from you. ")
                                .pauseFor(1000)
                                .typeString("You have spent a lot of time tracking him down, ")
                                .pauseFor(1000)
                                .typeString("And now you are close. " )
                                .typeString("Very close.")
                                .pauseFor(1000)
                                .typeString("That person's name is... Lucian. ")
                                .start();
                        }}
                    />
                </div>
            </div>
            <div className="choice-button">
                <button onClick={handleClick} class="btn-secondary btn-lg"> Continue </button>
            </div>
            <div className="hide">

            </div>
        </div>
    )
}

export default Begin