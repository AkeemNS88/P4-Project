import React from "react";
import rip from "./Images/rip.jpg"
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";

const Rip = ({ setCurrentUser }) => {

    const [encounters, setEncounters] = useState({});

    useEffect(() => {
        fetch('/me')
            .then(r => r.json())
            .then(data => setEncounters(data))
    }, [])

    const total = encounters.encounters.length

    let navigate = useNavigate();

    function handleClick() {
        navigate('/choosefighter')
    }
    function handleLogout() {
        fetch("/logout", {
            method: 'DELETE'
        })
        setCurrentUser(null)
        navigate('/')
    }


    return (
        <div>
            <div>
                <h1 className="encounter-title">You Are Dead LOL </h1>
            </div>
            <div>
                <img className="encounter-image" src={rip} alt="ur ded" />
            </div>
            <div>
                <h3 className="acc-title">You survived {total} encounters !</h3>
            </div>
            <div className="choice-button">
                <button onClick={handleClick} class="btn-secondary btn-lg"> Play Again? </button>
                <button onClick={handleLogout} class="btn-secondary btn-lg"> Delete Account Forever :(</button>
            </div>
        </div>
    )
}

export default Rip