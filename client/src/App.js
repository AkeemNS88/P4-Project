import Welcome from './Components/Welcome';
import Encounter1Warrior from './Components/Encounter1Warrior';
import Encounter1Mage from './Components/Encounter1Mage';
import Encounter1Ranger from './Components/Encounter1Ranger';
import LucianEncounter from './Components/LucianEncounter';
import Warrior from './Components/Warrior'
import Mage from './Components/Mage';
import Ranger from './Components/Ranger'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ChooseFighter from './Components/ChooseFighter';
import { useState, useEffect } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  console.log(currentUser);
  useEffect(() => {
    fetch("/me", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setAuthenticated(true);
        });
      } else {
        setAuthenticated(true);
      }
    });
  }, []);

  if (!authenticated) {
    return <div></div>;
  }


























//pass down state of masters here into lucianecounter, etc
//make callback function to reference the get/patch request here ?

//figure out encounter counter for user, to track and save as highscore     
// ***---maybe solved using cookies test code in sessions controller---*** have an idea

//get rid of skill table. we will handle skills on front end. diff functions for diff buttons

//user table should have
//username
//password_digest
//encounter counter?
//... etc?

//encounter table 
//encounter name? ex. Lucian, Lich King, Crossroads.. etc
//this might be how we can keep track of # of encounters ^^^^^^
//when new encounter is created add 1 to user encounter counter

//master table
//connect a user to a master...?
//

                  //IMPORTANT!!!!!!!!!!!!!!!!!!! HERE!!!!!!!!!!!!!!!!!!!!!!!
                  //encounter belongs to master, belongs to user
                  //user has_many encounters
                  //master has_many encounters


//front end --> make a visible representation of # of encounters in top corner
//so you can track progress
//handle skills and functions for that on the front end. in state.
//maybe make a health bar ???? that would be cool lol
// or instead make the number visible and trackable like the encounters number^
//make high score page
//make death page or alert or something "try again" button idk
//make a user page where people can see their account. Delete it, Update (change name)...

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
        <Route path="/choosefighter" element={<ChooseFighter />} />
        <Route path="/warrior-encounter" element={<Encounter1Warrior />} />
        <Route path="/ranger-encounter" element={<Encounter1Ranger />} />
        <Route path="/mage-encounter" element={<Encounter1Mage />} />
        <Route path="/lucian" element={<LucianEncounter />} />
         <Route path="/warrior" element={<Warrior />} />
        <Route path="/mage" element={<Mage />} />
        <Route path="/ranger" element={<Ranger />} />

      </Routes>
    </Router>
  );
}

export default App;
