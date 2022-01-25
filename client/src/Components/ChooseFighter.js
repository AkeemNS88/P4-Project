import React from "react";
import enemy from "./Encounters/set1-1.jpg"


function ChooseFighter() {
    return (
        <div>
            <div>
                <h1 className="welcome">Choose Your Fighter!</h1>
            </div>

            <div>
                <h3 className="warrior">Warrior</h3>
                <img className="choose" src={enemy} />
            </div>
            <div>
            <h3 className="mage">Mage</h3>

                <img className="choose" src={enemy} />
            </div>
            <div>
            <h3 className="ranger">Ranger</h3>

                <img className="choose" src={enemy} />
            </div>
        </div>
    )
}

export default ChooseFighter