import React from "react";
import Typewriter from "typewriter-effect";
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import lich from './Images/lich.jpg'

function LichKing() {
    const [enemyHealth, setEnemyHealth] = useState(100)
    const [heroHealth, setHeroHealth] = useState(100)

    function enemyDamage() {
        return Math.floor(Math.random(1 - 10) * (10 - 1) + 11)
    }

    function heroDamage() {
        return Math.floor(Math.random(1 - 10) * (10 - 1) + 30)
    }

    let navigate = useNavigate();


    let heroRoll = heroDamage()
    let enemyRoll = enemyDamage()

    const updateHealth = () => {
        //attacking enemy lower his health
        let damageL = (enemyHealth) - (heroRoll)
        setEnemyHealth(damageL)
        let damageH = (heroHealth) - (enemyRoll)
        setHeroHealth(damageH)

        if (enemyHealth > 0) {
             { alert(`You hit for ${heroRoll} damage`) }

        } else if (heroRoll > enemyHealth) {
            alert("You defeated Lucian!")
            fetch("/encounters", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify ({
                    name: "Woods",
                    user_id: 4,
                 })   
                })
            navigate("/woods")
            (heroHealth = heroHealth)
        }  
        else if (enemyHealth < 1) {
            alert("You defeated Lucian!")
            fetch("/encounters", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify ({
                    name: "Woods",
                    user_id: 4,
                 })   
                })
            navigate("/woods")
            (heroHealth = heroHealth)
        }

        if (heroHealth > 0){                
            alert(`You got hit for ${enemyRoll} damage`) 
           } else if (heroHealth < 1) {
               alert("You died")
               navigate("/choosefighter")
           }
        }



    function showTalk() {
        alert(`It's too late for you! HOWOWWWWWWWWWWWWWWWL`)
        let damageH = (heroHealth) - (enemyRoll)
        setHeroHealth(damageH)
        alert(`You got hit for ${enemyRoll} damage`)
        if (heroHealth < 1) {
            alert("You Died")
            navigate("/choosefighter")
    }
    }


    return (
        <div>
            <div>
                <h1 className="encounter-title">The Lich King</h1>
            </div>
            <div>
                <img className="encounter-image" src={lich} />
            </div>
            <div className="text-holder">

                <div className="story-text">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .changeDelay(50)
                                .typeString("As you meander down the path, you spot a hidden cache half-buried in the dirt. ")
                                .pauseFor(1000)
                                .typeString("After inspecting the environment, you see that the coast is clear... ")
                                .pauseFor(1000)
                                .typeString("After sifting through some random bits and baubles only important to a ruffian, you spy a gleaming object towards the bottom of the chest..")
                                .pauseFor(1000)
                                .typeString("It is a potion with a scroll attached to the side that reads: ")
                                .pauseFor(1000)
                                .typeString('"To thee who seeks heartier fortitude, drink this potion and feel the power of resilience course through your veins"')
                                .pauseFor(1000)
                                .typeString("Shortly after you polish the bottle, you hear a cacophonous sound. ")
                                .pauseFor(1000)
                                .typeString("You turn and see a phantom-like figure approaching  you...")
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
            <div className="hero-health">
                        <h3>Your Health: {heroHealth} </h3>
            </div>
            <div className="enemy-health">
            <h3>Lich King's Health: {enemyHealth}</h3>

            </div>
    
        </div>
    )
}

export default LichKing