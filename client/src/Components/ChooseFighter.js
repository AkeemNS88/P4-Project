import React from "react";
import enemy from "./Encounters/set1-1.jpg"
import Button from 'react-bootstrap/Button';


function ChooseFighter() {
    return (
        <div id="wrapper">
            <div>
                <h1 className="welcome">Choose Your Fighter!</h1>
            </div>

            <h3 className="warrior">Warrior</h3>
            <div className="class-descrip">
                <h3 className="class-text"> Warrior, fierce and formidable. Starts with 150 health, 50 wealth, and 75 energy.</h3>
                <Button variant="dark" className="choose-champ" style={{fontSize: "25px"}}>Choose Warrior</Button>
            </div>
            <img className="choose" src={enemy} />

            <h3 className="mage">Mage</h3>
            <div className="class-descrip">
                <h3 className="class-text" > Mage, wise and cautious, in tune with the spiritual nature of the world. Starts with 100 health, 50 wealth, and 200 energy.</h3>
                <Button variant="dark" className="choose-champ" style={{fontSize: "25px"}}>Choose Mage</Button>
            </div>
            <img className="choose" src={enemy} />


            <h3 className="ranger">Ranger</h3>
            <div className="class-descrip">
                <h3 className="class-text"> Ranger, sharp shot, great attention to detail. Finds what most others don't. Starts with 150 health, 50 wealth, and 75 energy.</h3>
                <Button variant="dark" className="choose-champ" style={{fontSize: "25px"}}>Choose Ranger</Button>
            </div>
            <img className="choose" src={enemy} />

        </div>
    )
}

export default ChooseFighter