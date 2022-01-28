import Welcome from './Components/Welcome';
import Encounter1Warrior from './Components/Encounter1Warrior';
import LucianEncounter from './Components/LucianEncounter';
import Woods from './Components/Woods';
import WoodsLeft from './Components/WoodsLeft';
import WoodsRight from './Components/WoodsRight';
import LichKing from './Components/LichKing';
import StoneGolem from './Components/StoneGolem';
import AfterKing from './Components/AfterKing';
import Warrior from './Components/Warrior'
import Thief from './Components/Thief';
import Satan from './Components/Satan';
import Tunnel from './Components/Tunnel';
import Cave from './Components/Cave'
import Rip from './Components/Rip';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ChooseFighter from './Components/ChooseFighter';
import { useState, useEffect } from "react";
import LoginForm from './Components/LoginForm';
import Shop from './Components/Shop'
function App() {
  // const [fighter, setFighter] = useState([])
  // const [lucian, setLucian] = useState([])

  const [currentUser, setCurrentUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

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


//pass down state of masters here into lucianecounter, etc
//make callback function to reference the get/patch request here ?

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
        <Route path="/lucian" element={<LucianEncounter />} />
        <Route path="/woods" element={<Woods />} />
        <Route path="/woodsleft" element={<WoodsLeft />} />
        <Route path="/lichking" element={<LichKing />} />
        <Route path="/afterbattle" element={<AfterKing />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/thief" element={<Thief />} />
        <Route path="/tunnel" element={<Tunnel />} />
        <Route path="/cave" element={<Cave />} />
        <Route path="/satan" element={<Satan />} />
        <Route path="/woodsright" element={<WoodsRight />} />
        <Route path="/stonegolem" element={<StoneGolem />} />
        <Route path="/warrior" element={<Warrior />} />
        <Route path="/rip" element={<Rip />} />

        <Route path= "/login" element={<LoginForm currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
      </Routes>
    </Router>
  );
}

export default App;
