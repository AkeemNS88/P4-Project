import React from "react";
import enemy from "./Encounters/set1-1.jpg"
import 'bootstrap/dist/css/bootstrap.min.css'
import Typewriter from "typewriter-effect";

function Encounter1() {
    //get request to all masters? 

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
                <img className="encounter-image" src={enemy} />
            </div>
            <div className="text-holder">

                <div className="story-text">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .changeDelay(50)
                                .typeString("You walk down the forest and see some guys chillin.")
                                .pauseFor(1000)
                                .typeString("They look at you with disdain and you dont know what to do.")
                                .pauseFor(1000)
                                .typeString("You think to walk away but reassess the situation and you believe that you will be able to conquer these nerds.")
                                .pauseFor(1000)
                                .typeString("You could: enter combat, try to reason with them, or walk away unnoticed. What would you like to do?")
                                .start();
                        }}
                    />
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

export default Encounter1