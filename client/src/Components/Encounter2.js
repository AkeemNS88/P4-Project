import React from "react";

function Encounter2() {

    function rollDamage(){
        Math.random(1-10)

        //post request here
    }

    return(
        <div>
        <div>
            <h1 className="encounter-title">Encounter</h1>
        </div>
        <div className="story-text"> 
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

export default Encounter2