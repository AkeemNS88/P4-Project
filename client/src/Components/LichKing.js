import React from "react";
import Typewriter from "typewriter-effect";
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";
import lich from './Images/lich.jpg'

function LichKing() {
    const [enemyHealth, setEnemyHealth] = useState(100)
    const [heroHealth, setHeroHealth] = useState(150)
    
    const [currentUser, setCurrentUser] = useState({});
    
    useEffect(() => {
      fetch('/me')
          .then(r => r.json())
          .then(data => setCurrentUser(data))
      }, [])

    function enemyDamage() {
        return Math.floor(Math.random(1 - 10) * (10 - 1) + 25)
    }

    function heroDamage() {
        return Math.floor(Math.random(1 - 10) * (10 - 1) + 30)
    }

    function reasonRoll() {
        return Math.floor(Math.random(1 - 5) * (5 - 1) + 1)
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
            alert("You defeated The Lich King!")
            fetch("/encounters", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: "After Lich King",
                    user_id: currentUser.id,
                })
            })
            navigate("/afterbattle")
                (heroHealth = heroHealth)
        }
        else if (enemyHealth < 1) {
            alert("You The Lich King!")
            fetch("/encounters", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: "After Lich King",
                    user_id: currentUser.id,
                })
            })
            navigate("/afterbattle")
                (heroHealth = heroHealth)
        }

        if (heroHealth > 0) {
            alert(`You got hit for ${enemyRoll} damage`)
        } else if (heroHealth < 1) {
            alert("You died")
            navigate("/choosefighter")
        }
    }



    function showTalk() {
        let roll = reasonRoll()

        if (roll > 3) {
            alert("I shall not waste my time with you, puny human. You may leave, but never let me see you again!")
           navigate('/afterbattle')
        } else {

            alert(`You dare try to beg for forgiveness after stealing my artifacts. You will know pain!`)
            let damageH = (heroHealth) - (enemyRoll)
            setHeroHealth(damageH)
            alert(`You got hit for ${enemyRoll} damage`)
            if (heroHealth < 1) {
                alert("You Died")
                navigate("/choosefighter")
            }
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
                                .typeString("The sound gets defeaning as the figure draws near. ")
                                .pauseFor(1000)
                                .typeString('"I am The Lich King, and your foul human stench has led me here. ')
                                .pauseFor(1000)
                                .typeString('How dare you steal from me! ')
                                .pauseFor(1000)
                                .typeString('Prepare to understand the meaning of pain. Raise your weapon, human filth! "')
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