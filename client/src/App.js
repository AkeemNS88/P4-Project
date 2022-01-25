import Welcome from './Components/Welcome';
import Encounter1 from './Components/Encounter1';
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

      </Routes>
    </Router>
  );
}

export default App;
