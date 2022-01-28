import React from "react";
import Typewriter from "typewriter-effect";
import { useNavigate } from 'react-router-dom'
import loot from './Images/loot.jpg'

function WoodsLeft() {
    
    let navigate = useNavigate()
    function handleClick(){
        fetch("/encounters", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify ({
                name: "The Lich King",
                user_id: 4,
             })   
            })
      
        navigate('/lichking')
    }


    return (
        <div>
            <div>
                <h1 className="encounter-title">Secret Treasure</h1>
            </div>
            <div>
                <img className="encounter-image" src={loot} />
            </div>
            <div className="text-holder">

                <div className="story-text">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .changeDelay(50)
                                .typeString("As you meander down the path, you spot a hidden cache half-buried in the dirt. ")
                                .pauseFor(1000)
                                .typeString("After inspecting the environment, you see that the coast is clear... ")
                                .pauseFor(1000)
                                .typeString("After sifting through some random bits and baubles only important to a ruffian, you spy a gleaming object towards the bottom of the chest..")
                                .pauseFor(1000)
                                .typeString("It is a potion with a scroll attached to the side that reads: ")
                                .pauseFor(1000)
                                .typeString('"To thee who seeks heartier fortitude, drink this potion and feel the power of resilience course through your veins"')
                                .pauseFor(1000)
                                .typeString("Shortly after you polish the bottle, you hear a cacophonous sound. ")
                                .pauseFor(1000)
                                .typeString("You turn and see a phantom-like figure approaching  you...")
                                .start();
                        }}
                    />
                </div>
            </div>
            <div className="choice-button">
            <button onClick={handleClick} class="btn-secondary btn-lg"> Continue </button>
            </div>
           
    
        </div>
    )
}

export default WoodsLeft