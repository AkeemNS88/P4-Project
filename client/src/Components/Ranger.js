import React from "react";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import enemy from "./Encounters/set1-1.jpg"

function Ranger() {
    const [fighter, setFighter] = useState("")

    function getMaster() {
        fetch(`masters/3`)
            .then(r => r.json())
            .then(data => setFighter(data.name)
            )
    }
    useEffect(getMaster, [])
    console.log(fighter)

    return (
        <div>
            <div>
                <h1 className="welcome">Ranger</h1>
            </div>
            <div>
                <img className="portal" src={enemy} />
            </div>
            <div className="char-text">
                <Typewriter

                    onInit={(typewriter) => {

                        typewriter

                            .changeDelay(50)
                            .typeString("You are a hearty adventurer, you hit thing with arrow.")
                            .pauseFor(1000)
                            .typeString("Mfs dont even want a piece of you.")
                            .pauseFor(1000)
                            .typeString("You are so tuff, literally undefeated.")
                            .pauseFor(1000)
                            .typeString("The world aint ready for ur gangsta ass.")
                            .start();
                    }}
                />
            </div>
            <div className="enter-button">
                <button type="button" class="btn btn-dark btn-lg">Begin Adventure</button>
            </div>
        </div>
    )
}

export default Ranger