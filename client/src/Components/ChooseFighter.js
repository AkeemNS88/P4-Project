import React from "react";
import enemy from "./Encounters/set1-1.jpg"
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'


function ChooseFighter() {
    let navigate = useNavigate();

    function handleWarrior(e){
        e.preventDefault()


        navigate("/warrior")
    }
    function handleMage(e){
        e.preventDefault()
        navigate("/mage")
    }
    function handleRanger(e){
        e.preventDefault()
        navigate("/ranger")
    }


    return (
        <div id="wrapper">
            <div>
                <h1 className="welcome">Choose Your Fighter!</h1>
            </div>

            <h3 className="warrior">Warrior</h3>
            <div className="class-descrip">
                <h3 className="class-text"> Warrior, fierce and formidable. Starts with 100 health, 20 wealth, and 50 energy.</h3>
                <Button onClick={handleWarrior}variant="dark" className="choose-champ" style={{fontSize: "25px"}}>Choose Warrior</Button>
            </div>
            <img className="choose" src={enemy} />

            {/* <h3 className="mage">Mage</h3>
            <div className="class-descrip">
                <h3 className="class-text" > Mage, wise and cautious, in tune with the spiritual nature of the world. Starts with 50 health, 20 wealth, and 100 energy.</h3>
                <Button onClick={handleMage} variant="dark" className="choose-champ" style={{fontSize: "25px"}}>Choose Mage</Button>
            </div>
            <img className="choose" src={enemy} />


            <h3 className="ranger">Ranger</h3>
            <div className="class-descrip">
                <h3 className="class-text"> Ranger, sharp shot, great attention to detail. Finds what most others don't. Starts with 80 health, 20 wealth, and 75 energy.</h3>
                <Button onClick={handleRanger} variant="dark" className="choose-champ" style={{fontSize: "25px"}}>Choose Ranger</Button>
            </div>
            <img className="choose" src={enemy} />  */}

        </div>
    )
}

export default ChooseFighter