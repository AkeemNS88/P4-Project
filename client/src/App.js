import Welcome from './Components/Welcome';
import Encounter1 from './Components/Encounter1';
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
        <Route path="/encounter1" element={<Encounter1 />} />
        <Route path="/warrior" element={<Warrior />} />
        <Route path="/mage" element={<Mage />} />
        <Route path="/ranger" element={<Ranger />} />

      </Routes>
    </Router>
  );
}

export default App;
