import React from "react";
import Typewriter from "typewriter-effect";
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import satan from './Images/satan.jpg'

function Satan() {
    const [enemyHealth, setEnemyHealth] = useState(666)
    const [heroHealth, setHeroHealth] = useState(200)

    function enemyDamage() {
        return Math.floor(Math.random(1 - 10) * (10 - 1) + 40)
    }

    function heroDamage() {
        return Math.floor(Math.random(1 - 10) * (10 - 1) + 100)
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
            alert("You defeated God")
            navigate("/rip")
        }
        else if (enemyHealth < 1) {
            alert("You killed SAYTEAN")
            navigate("/rip")
        }

        if (heroHealth > 0) {
            alert(`You got hit for ${enemyRoll} damage`)
        } else if (heroHealth < 1) {
            alert("You died")
            navigate("/rip")
        }
    }



    function showTalk() {
        alert('YOU SHOULD KNOW NOT TO MAKE DEALS WITH THE DEVIL')
        alert('You lose 19385481723487 hitpoints. ')
        setHeroHealth(-1000000000000)
        navigate('/rip')
    }

    function poop(){
        alert("You poop your pants")
        alert("SAYTEAN is offended")
        setEnemyHealth(enemyHealth - 2)
        alert(`You hit for 2 damage.. and you stink`)    }


    return (
        <div>
            <div>
                <h1 className="encounter-title">SAYTEAN</h1>
            </div>
            <div>
                <img className="encounter-image" src={satan} />
            </div>
            <div className="text-holder">

                <div className="story-text">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .changeDelay(50)
                                .typeString("The only treasure here is your SOUL! ")
                                .pauseFor(1000)
                                .typeString('Kneel before SAYTEAN ')
                                .start();
                        }}
                    />
                </div>
            </div>
            <div className="choice-button">
                <button onClick={updateHealth} class="btn-secondary btn-lg"> Attack </button>
                <button onClick={showTalk} class="btn-secondary btn-lg"> Reason </button>
                <button onClick={poop} class="btn-secondary btn-lg"> &#128169; </button>
            </div>
            <div className="hero-health">
                <h3>Your Health: {heroHealth} </h3>
            </div>
            <div className="enemy-health">
                <h3> SAYTEAN Health: {enemyHealth}</h3>

            </div>

        </div>
    )
}

export default Satan