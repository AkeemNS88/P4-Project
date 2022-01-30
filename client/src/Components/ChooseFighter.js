import React from "react";
import warrior from "./Encounters/warrior.jpg";
import mage from "./Encounters/mage.jpg";
import ranger from "./Encounters/ranger.jpg";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'


function ChooseFighter() {
    let navigate = useNavigate();

    function handleWarrior(e) {
        e.preventDefault()

        navigate("/warrior")
    }
    

    return (
        <div id="wrapper">
            <div>
                <h1 className="welcome">Choose Your Fighter!</h1>
            </div>

            <h3 className="warrior">Warrior</h3>
            <div className="class-descrip">
                <h3 className="class-text"> Warrior, fierce and formidable. Starts with 100 health, 20 wealth, and 50 energy.</h3>
                <Button onClick={handleWarrior} variant="dark" className="choose-champ" style={{ fontSize: "25px" }}>Choose Warrior</Button>
            </div>
            <img className="choose" src={warrior} />

            <h3 className="mage">Minalus the Mage</h3>
            <div className="class-descrip">
                <h3 className="class-text" > Mage, wise and cautious, in tune with the spiritual nature of the world. Starts with 50 health, 20 wealth, and 100 energy.</h3>
                <Button variant="dark" className="choose-champ" style={{ fontSize: "25px" }}>Coming Soon...</Button>
            </div>
            <img className="choose" src={mage} />


            <h3 className="ranger">Seigard the Ranger</h3>
            <div className="class-descrip">
                <h3 className="class-text"> Ranger, sharp shot, great attention to detail. Finds what most others don't. Starts with 80 health, 20 wealth, and 75 energy.</h3>
                <Button variant="dark" className="choose-champ" style={{ fontSize: "25px" }}>Coming Soon...</Button>
            </div>
            <img className="choose" src={ranger} />
        </div>
    )
}

export default ChooseFighter