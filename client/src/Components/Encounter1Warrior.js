import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Typewriter from "typewriter-effect";
import intro from "./Encounters/beginning.jpg"
import { useNavigate } from "react-router-dom";
import LucianEncounter from "./LucianEncounter";
import { useState, useEffect } from "react";

function Encounter1Warrior() {
    const [fighter, setFighter] = useState({})
    //get request to all masters? 
    //review p3 for dynamically showing stuff
  let navigate = useNavigate()

    function handleClick(e){
        e.preventDefault()
        navigate("/lucian")
    }
    
    function getMaster() {
        fetch(`masters/1`)
            .then(r => r.json())
            .then(data => setFighter(data)
            )
        }
        useEffect(getMaster, [])
        
      
        let heroStats = {
            id: fighter.id,
            name: fighter.name,
            health: fighter.health,
            wealth: fighter.wealth,
            energy: fighter.energy
        }
        console.log(heroStats)
        
    return (
        <div>
            <div>
                <h1 className="encounter-title">Encounter 1</h1>
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
                                .typeString("You are hunting for someone.")
                                .pauseFor(1000)
                                .typeString("Someone who has wronged you.")
                                .pauseFor(1000)
                                .typeString("Many years ago, this person took something from you.")
                                .pauseFor(1000)
                                .typeString("You have spent a lot of time tracking him down,")
                                .pauseFor(1000)
                                .typeString("And now you are close Very close.")
                                .pauseFor(1000)
                                .typeString("That person's name is... Lucian.")
                                .pauseFor(1000)
                                .typeString("Proper backstory for real will end up here....")
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

export default Encounter1Warrior