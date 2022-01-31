import React from "react";
import Typewriter from "typewriter-effect";
import { useNavigate } from 'react-router-dom'
import fire from './Images/fire.jpg'

function AfterBattle() {
    
    let navigate = useNavigate()
    function handleClick(){
        navigate('/shop')
    }


    return (
        <div>
            <div className="welcome">
                <h1 className="welcome">Recover</h1>
            </div>
            <div>
                <img className="encounter-image" src={fire} />
            </div>
            <div className="text-holder">

                <div className="story-text">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .changeDelay(50)
                                .typeString("After your long battles, and weary travel, you find a place to rest. ")
                                .pauseFor(1000)
                                .typeString("A clearing in the woods was perfect to setup a nice camp. ")
                                .pauseFor(1000)
                                .typeString("As you were collecting some wood for a proper fire, you notice a street sign pointing to a shop nearby. ")
                                .pauseFor(1000)
                                .typeString("You decide to investigate it in the morning. ")
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

export default AfterBattle