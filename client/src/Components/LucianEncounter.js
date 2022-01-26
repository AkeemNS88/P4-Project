import React from "react";
import enemy from "./Encounters/set1-1.jpg"
import 'bootstrap/dist/css/bootstrap.min.css'
import Typewriter from "typewriter-effect";
import lucian from "./Images/lucian.png"
import { useState, useEffect } from "react";

function LucianEncounter() {
    const [lucianHealth, setLucianHealth] = useState(100)
    const [heroHealth, setHeroHealth] = useState(100)

    function lucianDamage() {
        return Math.floor(Math.random(1 - 10) * (10 - 1) + 1)
    }

    function heroDamage() {
        return Math.floor(Math.random(1 - 10) * (10 - 1) + 50)
    }

    let heroRoll = heroDamage()
    let lucianRoll = lucianDamage()

    const updateHealth = () => {



        //attacking lucian lower his health
        fetch(`/masters/4`, {

            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                health: (lucianHealth) - heroRoll
            }),
        })
            .then((res) => res.json())
            .then((result) => setLucianHealth(result))

        if (lucianHealth > 1) {

            { alert(`You hit for ${heroRoll} damage`) }
        } else {
            alert("You defeated Lucian!")
        }


            //getting attacked by lucian lowering your health
            fetch(`/masters/1`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    health: (heroHealth) - lucianRoll
                }),
            })
                .then((res) => res.json())
                .then((result) => setHeroHealth(result))

                if (heroHealth > 1){                
                 alert(`You got hit for ${lucianRoll} damage`) 
                } else  if (heroHealth < 1) {
                    alert("u suck")
                }
    }

    console.log("Lucian's health is:" + lucianHealth)
    console.log("Your health is:" + heroHealth)







    function showTalk() {
        alert(`It's too late for you! HOWOWWWWWWWWWWWWWWW`)
    }

    // function showFlee() {
    //     //render function here that will take player to another route
    //     //bring back lucian in their storyline to fight with no escape.
    // }

    return (
        <div>
            <div>
                <h1 className="encounter-title">Encounter 1</h1>
            </div>
            <div>
                <img className="encounter-image" src={lucian} />
            </div>
            <div className="text-holder">

                <div className="story-text">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .changeDelay(50)
                                .typeString("You walk down the forest and see some guys chillin.")
                                .pauseFor(1000)
                                .typeString("They look at you with disdain and you dont know what to do.")
                                .pauseFor(1000)
                                .typeString("You think to walk away but reassess the situation and you believe that you will be able to conquer these nerds.")
                                .pauseFor(1000)
                                .typeString("You could: enter combat, try to reason with them, or walk away unnoticed. What would you like to do?")
                                .start();
                        }}
                    />
                </div>
            </div>
            <div className="choice-button">
                <button onClick={updateHealth} class="btn-secondary btn-lg"> Attack </button>
                <button onClick={showTalk} class="btn-secondary btn-lg"> Reason </button>
                <button class="btn-secondary btn-lg"> Flee </button>
            </div>
        </div>
    )
}

export default LucianEncounter