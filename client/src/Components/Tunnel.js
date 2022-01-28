import React from "react";
import Typewriter from "typewriter-effect";
import { useNavigate } from 'react-router-dom'
import tunnel from './Images/tunnel.jpg'

function Tunnel() {
    
    let navigate = useNavigate()
    function handleClick(){
        navigate('/cave')
    }


    return (
        <div>
            <div>
                <h1 className="encounter-title">The Smelly Tunnels</h1>
            </div>
            <div>
                <img className="encounter-image" src={tunnel} />
            </div>
            <div className="text-holder">

                <div className="story-text">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .changeDelay(50)
                                .typeString("After what seems like hours, your strange new companion finally leads you to the destination. ")
                                .pauseFor(1000)
                                .typeString("You both descend into the darkness, in hopes of finding treasure. ")
                                .pauseFor(1000)
                                .typeString("You sense an esoteric energy from your companion, but it could just be the smelly tunnels. ")
                                .pauseFor(1000)
                                .typeString("'Stay close' he says, 'the labyrinth is the downfall of many travelers, but I know the way. :p ' ")
                                .pauseFor(1000)
                                .typeString("Hoping he speaks the truth, you continue the descent. ")
                                .start();
                        }}
                    />
                </div>
            </div>
            <div className="choice-button">
            <button onClick={handleClick} class="btn-secondary btn-lg"> Continue... </button>
            </div>
           
    
        </div>
    )
}

export default Tunnel