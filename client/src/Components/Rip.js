import React from "react";
import rip from "./Images/rip.jpg"
import { useNavigate } from 'react-router-dom'


const Rip = ({setCurrentUser}) => {

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
            <div className="choice-button">
                <button onClick={handleClick} class="btn-secondary btn-lg"> Play Again? </button>
                <button onClick={handleLogout} class="btn-secondary btn-lg"> Welp. Imma head out..</button>
            </div>
        </div>
    )
}

export default Rip