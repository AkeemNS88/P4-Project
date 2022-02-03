import React from "react";
import Typewriter from "typewriter-effect";
import warrior from "./Encounters/warrior.jpg"
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";

function Warrior() {
    let navigate = useNavigate();

    const [currentUser, setCurrentUser] = useState({});
    
    useEffect(() => {
      fetch('/me')
          .then(r => r.json())
          .then(data => setCurrentUser(data))
      }, [])
    
    function handleClick(e){
        e.preventDefault()

        fetch("/encounters", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify ({
                name: "Lucian Battle",
                user_id: currentUser.id,
             })   
            })
            navigate("/new-beginnings")
    }


    return (
        <div>
            <div className="welcome">
                <h1 className="welcome">Warrior</h1>
            </div>
            <div>
                <img className="portal" src={warrior} />
            </div>
            <div className="char-text">
                <Typewriter
                    onInit={(typewriter) => {


                        typewriter
                            .changeDelay(50)
                            .typeString("You are Gustofferson, a warrior and adventurer of great renown. ")
                            .pauseFor(1000)
                            .typeString("As a close combat specialist you punish enemies foolish enough to step within range. ")
                            .pauseFor(1000)
                            .typeString("....and close the gap with those that do not. ")
                            .pauseFor(1000)
                            .typeString("Intimidating and battle crazed you're one adventure always up for a fight!")
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