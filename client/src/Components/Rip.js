import React from "react";
import rip from "./Images/rip.jpg"
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";

const Rip = ({ setCurrentUser }) => {

    const [encounters, setEncounters] = useState({});
<<<<<<< HEAD

    useEffect(() => {
        fetch('/me')
            .then(r => r.json())
            .then(data => setEncounters(data))
    }, [])

    const total = encounters.encounters.length
=======
    
        useEffect(() => {
          fetch('/me')
              .then(r => r.json())
              .then(data => setEncounters(data))
            }, [])
     
                
                function display(){
                    const total = encounters?.encounters?.length
                   return(

                       <h3 className="acc-title">You survived {total} encounters !</h3>
                   )
    
              }


>>>>>>> cc36181e116bed8ddbc8eaec71652ce6ee9062dd

        // const total = (encounters.encounters.length)
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
                {display()}
            </div>
            <div className="choice-button">
                <button onClick={handleClick} class="btn-secondary btn-lg"> Play Again? </button>
                <button onClick={handleLogout} class="btn-secondary btn-lg"> Delete Account Forever :(</button>
            </div>
        </div>
    )
}

export default Rip