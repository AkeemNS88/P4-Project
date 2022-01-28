import Welcome from './Components/Welcome';
import Encounter1Warrior from './Components/Encounter1Warrior';
import LucianEncounter from './Components/LucianEncounter';
import Woods from './Components/Woods';
import WoodsLeft from './Components/WoodsLeft';
import WoodsRight from './Components/WoodsRight';
import Warrior from './Components/Warrior'
import Mage from './Components/Mage';
import Ranger from './Components/Ranger'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ChooseFighter from './Components/ChooseFighter';
import { useState, useEffect } from "react";
import LoginForm from './Components/LoginForm';

function App() {
  // const [fighter, setFighter] = useState([])
  // const [lucian, setLucian] = useState([])

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

  // if (!authenticated) {
  //   return <div></div>;
  // }


//   function getMaster() {
//     fetch(`masters/1`)
//         .then(r => r.json())
//         .then(data => setFighter(data)
//         )
//     }
//     useEffect(getMaster, [])
    
  
//     const heroStats = {
//         id: fighter.id,
//         name: fighter.name,
//         health: fighter.health,
//         wealth: fighter.wealth,
//         energy: fighter.energy
//     }
//     console.log(heroStats)
  
// function getLucian(){
//   fetch('masters/2')
//   .then(r => r.json())
//         .then(data => setLucian(data)
//         )
// } useEffect(getLucian, [])


// const lucianStats = {
//   id: lucian.id,
//   name: lucian.name,
//   health: lucian.health,
//   wealth: lucian.wealth,
//   energy: lucian.energy
// }

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
        <Route path="/lucian" element={<LucianEncounter currentUser={currentUser} />} />
        <Route path="/woods" element={<Woods />} />
        <Route path="/woodsleft" element={<WoodsLeft />} />
        <Route path="/woodsright" element={<WoodsRight />} />
        <Route path="/warrior" element={<Warrior currentUser={currentUser} />} />
        <Route path="/mage" element={<Mage />} />
        <Route path="/ranger" element={<Ranger />} />
        <Route path= "/login" element={<LoginForm currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
      </Routes>
    </Router>
  );
}

export default App;
