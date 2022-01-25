import portal from './Images/p2.gif'
import Welcome from './Components/Welcome';
// import button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'

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
      <button type="button" class="btn btn-dark btn-lg">Enter If You Dare</button>
      </div>
    </div>
  );
}

export default App;
