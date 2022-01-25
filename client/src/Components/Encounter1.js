import React from "react";
import enemy from "./Encounters/set1-1.jpg"
import 'bootstrap/dist/css/bootstrap.min.css'

function Encounter1() {
    return (
        <div>
            <div>
                <h1 className="encounter-title">Encounter 1</h1>
            </div>
            <div>
                <img className="encounter-image" src={enemy} />
            </div>
            <div className="choice-button">
                <button class="btn-secondary btn-lg"> Option 1 </button>
                <button class="btn-secondary btn-lg"> Option 2 </button>
                <button class="btn-secondary btn-lg"> Option 3 </button>
            </div>
        </div>
    )
}

export default Encounter1