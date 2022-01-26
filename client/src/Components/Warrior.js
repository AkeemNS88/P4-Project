import React from "react";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import enemy from "./Encounters/set1-1.jpg"
import { useNavigate } from 'react-router-dom'


function Warrior() {
    const [fighter, setFighter] = useState("")
    let navigate = useNavigate();

    function handleClick(e){
        e.preventDefault()
        navigate("/warrior-encounter")
    }


    function getMaster() {
        fetch(`masters/1`)
            .then(r => r.json())
            .then(data => setFighter(data.name)
            )
    }
    useEffect(getMaster, [])
    console.log(fighter)

    return (
        <div>
            <div>
                <h1 className="welcome">Warrior</h1>
            </div>
            <div>
                <img className="portal" src={enemy} />
            </div>
            <div className="char-text">
                <Typewriter
                    onInit={(typewriter) => {


                        typewriter
                            .changeDelay(50)
                            .typeString("You are a hearty adventurer, you hit thing with sword.")
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
                <button onClick={handleClick} type="button" class="btn btn-dark btn-lg">Begin Adventure</button>
            </div>
        </div>
    )
}

export default Warrior