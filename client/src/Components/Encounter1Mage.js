import React from "react";
import enemy from "./Encounters/set1-1.jpg"
import 'bootstrap/dist/css/bootstrap.min.css'
import Typewriter from "typewriter-effect";
import intro from "./Encounters/beginning.jpg"
import { useState, useEffect } from "react";

function Encounter1Mage() {
    //get request to all masters? 
    //review p3 for dynamically showing stuff


    function damage() {
        return Math.floor(Math.random(1 - 10) * (10 - 1) + 1)
    }

    function showDamage() {
        alert(`You hit for ${damage()} damage`)
    }

    

    return (
        <div>
            <div>
                <h1 className="encounter-title">Encounter 1</h1>
            </div>
            <div>
                <img className="encounter-image" src={intro} />
            </div>
            <div className="text-holder">

                <div className="story-text">
            
                </div>
            </div>
            <div className="choice-button">
                <button onClick={showDamage} class="btn-secondary btn-lg"> Option 1 </button>
                <button class="btn-secondary btn-lg"> Option 2 </button>
                <button class="btn-secondary btn-lg"> Option 3 </button>
            </div>
        </div>
    )
}

export default Encounter1Mage