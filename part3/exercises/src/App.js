import './App.css';
import HobbyIntroduction from './components/Introductions.js';
import MyProjects from './components/Projects.js'


function App() {
  return (
    <div className="App">
     <h1>My Hobby: Knitting</h1>
     < HobbyIntroduction />
     < MyProjects />
    </div>
  );
}

export default App;
