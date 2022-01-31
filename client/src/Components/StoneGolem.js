import React from "react";
import Typewriter from "typewriter-effect";
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";
import golem from './Images/golem.jpg'

function StoneGolem() {
    const [enemyHealth, setEnemyHealth] = useState(200)
    const [heroHealth, setHeroHealth] = useState(100)
    const [currentUser, setCurrentUser] = useState({});
    
    useEffect(() => {
      fetch('/me')
          .then(r => r.json())
          .then(data => setCurrentUser(data))
      }, [])

    function enemyDamage() {
        return Math.floor(Math.random(1 - 10) * (10 - 1) + 15)
    }

    function heroDamage() {
        return Math.floor(Math.random(1 - 10) * (10 - 1) + 50)
    }

    let navigate = useNavigate();


    let heroRoll = heroDamage()
    let enemyRoll = enemyDamage()

    const updateHealth = () => {
        //attacking enemy lower his health
        let damageS = (enemyHealth) - (heroRoll)
        setEnemyHealth(damageS)
        let damageH = (heroHealth) - (enemyRoll)
        setHeroHealth(damageH)

        if (enemyHealth > 0) {
             { alert(`You hit for ${heroRoll} damage`) }

        } else if (heroRoll > enemyHealth) {
            alert("You defeated The Stone Golem!")
            fetch("/encounters", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify ({
                    name: "After Golem",
                    user_id: currentUser.id,
                 })   
                })
            navigate("/afterbattle")
            (heroHealth = heroHealth)
        }  
        else if (enemyHealth < 1) {
            alert("You defeated The Stone Golem!")
            fetch("/encounters", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify ({
                    name: "After Golem",
                    user_id: currentUser.id,
                 })   
                })
            navigate("/afterbattle")
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
        alert(`GRAAAAAAAAAAAAAAAAAAA`)
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
            <div className="welcome">
                <h1 className="welcome">The Stone Golem</h1>
            </div>
            <div>
                <img className="encounter-image" src={golem} alt="stuff"/>
            </div>
            <div className="text-holder">

                <div className="story-text">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .changeDelay(50)
                                .typeString("As you meander down the path, you spot an outofplace Potion at the base of a tree")
                                .pauseFor(1000)
                                .typeString("You survey your surroundings before approaching the curious potion")
                                .pauseFor(1000)
                                .typeString("Upon examination you spot the words 'Strength Unyielding' on the potion's label ")
                                .pauseFor(1000)
                                .typeString("Unsure whether you should leave the potion where you'd found it or test its claims, you decide to take a chance")
                                .pauseFor(1000)
                                .typeString("Not one to abandon all caution you dip a finger into the bottle and touch it to your tongue")
                                .pauseFor(1000)
                                .typeString("The flavor largely sweet and a bit tart. Seeing as you're still alive and NOT poisoned.. you chug the potion")
                                .pauseFor(1000)
                                .typeString("Falling to your knees a surge of overwhelming power courses through you and an audible gong fills your ears")
                                .pauseFor(1000)
                                .typeString("Coming to your senses you both hear and feel something large approaching from behind...")
                                .start();
                        }}
                    />
                </div>
            </div>
            <div className="choice-button">
            <button onClick={updateHealth} class="btn-secondary btn-lg"> Attack </button>
                <button onClick={showTalk} class="btn-secondary btn-lg"> Reason </button>
                {/* <button class="btn-secondary btn-lg"> Flee </button> */}
            </div>
            <div className="health">
                <h3 className="hero-health">Your Health: {heroHealth} </h3>
                <h3 className="enemy-health">Stone Golem's Health: {enemyHealth}</h3>
            </div>
    
        </div>
    )
}

export default StoneGolem