import React from "react";
import Typewriter from "typewriter-effect";
import woods from "./Images/woods.jpg"
import { useNavigate } from 'react-router-dom'

function Woods() {
    let navigate = useNavigate();

    function handleLeft() {
        //left path leads you to more health
        navigate('/woodsleft')
    }

    function handleRight() {
        //right path leads you to damage
        // and an encounter
        navigate('/woodsright')
    }
    return (
        <div>
            <div>
                <h1 className="encounter-title">The Withering Woods</h1>
            </div>
            <div>
                <img className="encounter-image" src={woods} />
            </div>
            <div className="text-holder">

                <div className="story-text">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .changeDelay(50)
                                .typeString("After defeating Lucian, you loot his corpse, and find several gold pieces. ")
                                .pauseFor(1000)
                                .typeString('Good riddance. ')
                                .pauseFor(1000)
                                .typeString("You make your way down into the Withering Woods in search of more treasures. ")
                                .pauseFor(1000)
                                .typeString("A crossroads lays before you, both paths seem unending and menacing. ")
                                .pauseFor(1000)
                                .typeString("Which path will you choose? ")
                                .start();
                        }}
                    />
                </div>
            </div>
            <div className="choice-button">
                <button onClick={handleLeft} class="btn-secondary btn-lg"> Left </button>
                <button onClick={handleRight} class="btn-secondary btn-lg"> Right? </button>
            </div>

        </div>
    )
}

export default Woods