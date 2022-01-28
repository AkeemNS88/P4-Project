import React from "react";
import rip from "./Images/rip.jpg"
function Rip() {


    
    return (
        <div>
            <div>
                <h1 className="encounter-title">You Are Dead LOL </h1>
            </div>
            <div>
                <img className="encounter-image" src={rip} alt="ur ded" />
            </div>
        </div>
    )
}

export default Rip