import React from "react";
import Typewriter from "typewriter-effect";
import { useNavigate } from 'react-router-dom'
import thief from './Images/thief.jpg'

function Thief() {
    
    let navigate = useNavigate()
    function handleClick(){
        alert("I thought you would have more than just a simple bangle and/or ale... Come with me if you seek real treasure.")
        navigate('/tunnel')
    }


    return (
        <div>
            <div className="welcome">
                <h1 className="welcome">A Shady Figure</h1>
            </div>
            <div>
                <img className="encounter-image" src={thief} />
            </div>
            <div className="text-holder">

                <div className="story-text">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .changeDelay(50)
                                .typeString("After you leave the shop happy with your new purchase, ")
                                .pauseFor(1000)
                                .typeString("You get the sensation you are being watched... ")
                                .pauseFor(1000)
                                .typeString("Quick as a wink, a person leaps from above trying to rob you for what you got. ")
                                .pauseFor(1000)
                                .typeString("Seeing no point in causing a scene in town, you attempt to reason with the thief. ")
                                .start();
                        }}
                    />
                </div>
            </div>
            <div className="choice-button">
            <button onClick={handleClick} class="btn-secondary btn-lg"> Reason </button>
            </div>
           
    
        </div>
    )
}

export default Thief