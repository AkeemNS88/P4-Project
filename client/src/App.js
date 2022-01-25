import portal from './Images/p2.gif'
import Welcome from './Components/Welcome';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div>
      <div className="welcome">
        <Welcome />

      </div>
      <div>
        <img className='portal' src={portal} />

      </div>
      <div className='enter-button'>
        <Button type="button" class="btn btn-secondary">Enter If You Dare!</Button>
      </div>
    </div>
  );
}

export default App;
