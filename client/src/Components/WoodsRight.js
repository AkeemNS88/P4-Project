import React from "react";
import Typewriter from "typewriter-effect";
import { useNavigate } from 'react-router-dom'
import pot from './Images/damage-pot.jpg'

function WoodsRight() {

    let navigate = useNavigate()
    function handleClick() {
        fetch("/encounters", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: "The Stone Golem",
                user_id: 4,
            })
        })

        navigate('/stonegolem')
    }


    return (
        <div>
            <div>
                <h1 className="encounter-title">A Curious Potion</h1>
            </div>
            <div>
                <img className="encounter-image" src={pot} />
            </div>
            <div className="text-holder">

                <div className="story-text">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .changeDelay(50)
                                .typeString("As you meander down the path, you spot an out of place Potion at the base of a tree. ")
                                .pauseFor(1000)
                                .typeString("You survey your surroundings before approaching the curious potion. ")
                                .pauseFor(1000)
                                .typeString("Upon examination you spot the words 'Strength Unyielding' on the potion's label. ")
                                .pauseFor(1000)
                                .typeString("Unsure whether you should leave the potion where you'd found it or test its claims, you decide to take a chance. ")
                                .pauseFor(1000)
                                .typeString("Not one to abandon all caution you dip a finger into the bottle and touch it to your tongue. ")
                                .pauseFor(1000)
                                .typeString("The flavor largely sweet and a bit tart. Seeing as you're still alive and NOT poisoned.. you chug the potion. ")
                                .pauseFor(1000)
                                .typeString("Falling to your knees a surge of overwhelming power courses through you and an audible gong fills your ears. ")
                                .pauseFor(1000)
                                .typeString("Coming to your senses you both hear and feel something large approaching from behind...")
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


export default WoodsRight