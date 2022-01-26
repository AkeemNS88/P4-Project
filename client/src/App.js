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


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
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
