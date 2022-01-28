import React from "react";
import Typewriter from "typewriter-effect";
import { useNavigate } from 'react-router-dom'

function WoodsRight() {
    let navigate = useNavigate();
    //magic item to do more damage
    //create fight


    return(
        <div>
        <div>
            <h1 className="encounter-title">Encounter</h1>
        </div>

        <div>
            <img className="encounter-image" />
        </div>

        <div className="choice-button">
                <button> Option 1 </button>
                <button> Option 2 </button>
                <button> Option 3 </button>
            </div>
    </div>
    )
}

export default WoodsRight