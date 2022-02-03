import React from "react";
import shop from "./Images/shop.PNG"
import Typewriter from "typewriter-effect";
import { useNavigate } from 'react-router-dom'

function Shop() {
    let navigate = useNavigate();

    function handleClick() {
        navigate('/thief')
    }

    
    return (
        <div>
            <div className="welcome">
                <h1 className="welcome">Glorious Googaws' Goods</h1>
            </div>
            <div>
                <img className="encounter-image" src={shop} />
            </div>
            <div className="text-holder">

                <div className="story-text">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .changeDelay(50)
                                .typeString("You follow the sign to a tiny village named 'Brymshander' ")
                                .pauseFor(1000)
                                .typeString('The towns-folk are rather apprehensive to your haggard presence, but you pay them no mind. ')
                                .pauseFor(1000)
                                .typeString("You wander in to the local shop and are greeted by an elderly slender man. ")
                                .pauseFor(1000)
                                .typeString("'Greetings adventurer, welcome to Glorious Googaws. ")
                                .pauseFor(1000)
                                .typeString("I am Googaw. ")
                                .pauseFor(1000)
                                .typeString("Feel free to take a look around and ask me if you have any questions. '")
                                .pauseFor(1000)
                                .typeString("After perusing Googaws' Glorious Goods, two artifacts truly stand out to you. ")
                                .pauseFor(1000)
                                .typeString("The first being: The One Bangle To Rule Them All. ")
                                .pauseFor(1000)
                                .typeString("The second being: Foamy Ale. ")
                                .pauseFor(1000)
                                .typeString("A tough decision lies before you. ")
                                .pauseFor(1000)
                                .typeString("What do you do? ")
                                .start();
                        }}
                    />
                </div>
            </div>
            <div className="choice-button">
                <button onClick={handleClick} class="btn-secondary btn-lg"> The One Bangle To Rule Them All </button>
                <button onClick={handleClick} class="btn-secondary btn-lg"> Foamy Ale </button>
            </div>

        </div>
    )
}

export default Shop