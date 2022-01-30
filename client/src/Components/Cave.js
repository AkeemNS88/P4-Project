import React from "react";
import Typewriter from "typewriter-effect";
import { useNavigate } from 'react-router-dom'
import cave from './Images/cave.jpg'
import { useState, useEffect } from "react";

function Cave() {
    const [currentUser, setCurrentUser] = useState({});
    
    useEffect(() => {
      fetch('/me')
          .then(r => r.json())
          .then(data => setCurrentUser(data))
      }, [])
    
    let navigate = useNavigate()

    function handleClick(e){
        e.preventDefault()
        alert("MEET YOUR DOOM ")

        fetch("/encounters", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify ({
                name: "SAYTEAN BATTLE",
                user_id: currentUser.id,
             })   
            })
            
            navigate('/satan')
    }

    

    return (
        <div>
            <div>
                <h1 className="encounter-title">Cave of Darkness</h1>
            </div>
            <div>
                <img className="encounter-image" src={cave} />
            </div>
            <div className="text-holder">

                <div className="story-text">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .changeDelay(50)
                                .typeString("The stench is horrendous with each step you take. ")
                                .pauseFor(1000)
                                .typeString("You enter a cavernous room littered with half-rotted flesh, and giant skeletal remains. ")
                                .pauseFor(1000)
                                .typeString("As your heart quickens, your strange companion says 'My sources say the treasure must be in this room. ")
                                .pauseFor(1000)
                                .typeString("Can you see anything?' ")
                                .pauseFor(1000)
                                .typeString("As you sort through the remains of unlucky adventurers, you feel the cave grow colder. ")
                                .pauseFor(1000)
                                .typeString("You shudder. ")
                                .pauseFor(1000)
                                .typeString(`The man smirks and bleakly asks 'Are you cold Gustofferson?' `)
                                .pauseFor(1000)
                                .typeString("Having never given the man your name, you quickly turn and ask: ")
                                .pauseFor(1000)
                                .typeString(" 'Who are you?' ")
                                .pauseFor(1000)
                                .typeString("..... ")
                                .pauseFor(1000)
                                .typeString("I ")
                                .pauseFor(1000)
                                .typeString("AM ")
                                .pauseFor(2000)
                                .typeString(".... ")
                                .pauseFor(2000)
                                .typeString("SAYTEAN ")
                                .start();
                        }}
                    />
                </div>
            </div>
            <div className="choice-button">
            <button onClick={handleClick} class="btn-secondary btn-lg"> Oh Nooooooooooooooooooooooo </button>
            </div>
           
    
        </div>
    )
}

export default Cave