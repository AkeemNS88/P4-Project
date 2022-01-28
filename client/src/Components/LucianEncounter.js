import React from "react";
import enemy from "./Encounters/set1-1.jpg"
import 'bootstrap/dist/css/bootstrap.min.css'
import Typewriter from "typewriter-effect";
import lucian_image from "./Images/lucian.png"
import { useState, useEffect } from "react";

function LucianEncounter({lucian, fighter, lucianStats, heroStats}) {
    const [lucianHealth, setLucianHealth] = useState(lucian)
    const [heroHealth, setHeroHealth] = useState(fighter)

    function lucianDamage() {
        return Math.floor(Math.random(1 - 10) * (10 - 1) + 11)
    }

    function heroDamage() {
        return Math.floor(Math.random(1 - 10) * (10 - 1) + 30)
    }

    let heroRoll = heroDamage()
    let lucianRoll = lucianDamage()

    const updateHealth = () => {

        //attacking lucian lower his health
        fetch(`/masters/2`, {

            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                health: (lucianHealth.health) - heroRoll
            }),
        })
            .then((res) => res.json())
            .then((result) => setLucianHealth(result))

        if (lucianHealth.health >= 0) {

            { alert(`You hit for ${heroRoll} damage`) }
        } else if (lucianHealth.health < 1 ){
            alert("You defeated Lucian!")
            fetch(`/masters/1`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    health: 100
                }),
            })
        }


            //getting attacked by lucian lowering your health
            fetch(`/masters/1`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    health: (heroHealth.health) - lucianRoll
                }),
            })
                .then((res) => res.json())
                .then((result) => setHeroHealth(result))

                if (heroHealth.health >= 0){                
                 alert(`You got hit for ${lucianRoll} damage`) 
                } else  if (heroHealth.health < 1) {
                    alert("u suck")
                }
    }

    console.log("Lucian's health is:" + lucianHealth.health)
    console.log("Your health is:" + heroHealth.health)







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
                <img className="encounter-image" src={lucian_image} />
            </div>
            <div className="text-holder">

                <div className="story-text">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .changeDelay(50)
                                .typeString("You see your arch nemesis Lucian. ")
                                .pauseFor(1000)
                                .typeString("He smells so bad. ")
                                .pauseFor(1000)
                                .typeString("Real bad. Like wet dog bad..")
                                .pauseFor(1000)
                                .typeString("He insulted your mother. ")
                                .pauseFor(1000)
                                .typeString("What do you do? ")
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