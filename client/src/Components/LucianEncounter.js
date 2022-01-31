import React from "react";
import enemy from "./Encounters/set1-1.jpg"
import 'bootstrap/dist/css/bootstrap.min.css'
import lucian_image from "./Images/lucian.png"
import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { useNavigate } from 'react-router-dom'


function LucianEncounter() {
    const [lucianHealth, setLucianHealth] = useState(100)
    const [heroHealth, setHeroHealth] = useState(100)
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        fetch('/me')
            .then(r => r.json())
            .then(data => setCurrentUser(data))
    }, [])


    function lucianDamage() {
        return Math.floor(Math.random(1 - 10) * (10 - 1) + 11)
    }

    function heroDamage() {
        return Math.floor(Math.random(1 - 10) * (10 - 1) + 30)
    }

    let navigate = useNavigate();


    let heroRoll = heroDamage()
    let lucianRoll = lucianDamage()

    const updateHealth = () => {
        //attacking lucian lower his health
        let damageL = (lucianHealth) - (heroRoll)
        setLucianHealth(damageL)
        let damageH = (heroHealth) - (lucianRoll)
        setHeroHealth(damageH)

        if (lucianHealth > 0) {
            { alert(`You hit for ${heroRoll} damage`) }

        } else if (heroRoll > lucianHealth) {
            alert("You defeated Lucian!")
            fetch("/encounters", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: "Woods",
                    user_id: currentUser.id,
                })
            })
            navigate("/woods")
                (heroHealth = heroHealth)
        }
        else if (lucianHealth < 1) {
            alert("You defeated Lucian!")
            fetch("/encounters", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: "Woods",
                    user_id: currentUser.id,
                })
            })
            navigate("/woods")
                (heroHealth = heroHealth)
        }

        if (heroHealth > 0) {
            alert(`You got hit for ${lucianRoll} damage`)
        } else if (heroHealth < 1) {
            alert("You died")
            navigate("/choosefighter")
        }
    }



    function showTalk() {
        alert(`It's too late for you! HOWOWWWWWWWWWWWWWWWL`)
        let damageH = (heroHealth) - (lucianRoll)
        setHeroHealth(damageH)
        alert(`You got hit for ${lucianRoll} damage`)
        if (heroHealth < 1) {
            alert("You Died")
            navigate("/choosefighter")
        }
    }


    return (
        <div>
            <div className="welcome">
                <h1 className="welcome">Battle With Lucian</h1>
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
                                .typeString("You remember him from his time as an adventurer...  ")
                                .pauseFor(1000)
                                .typeString("Lycanthropy though... how did this happen to him..? ")
                                .pauseFor(1000)
                                .typeString("Regardless he blocks your path.. you can attempt to reason with him... ")
                                .pauseFor(1000)
                                .typeString("if there's still any of 'him' left. ")
                                .start();
                        }}
                    />
                </div>
            </div>
            <div className="choice-button">
                <button onClick={updateHealth} class="btn-secondary btn-lg"> Attack </button>
                <button onClick={showTalk} class="btn-secondary btn-lg"> Reason </button>
            </div>
            <div className="health">
                <h3 className="hero-health">Your Health: {heroHealth} </h3>
                <h3 className="enemy-health">Lucian's Health: {lucianHealth}</h3>
            </div>

        </div>
    )
}

export default LucianEncounter