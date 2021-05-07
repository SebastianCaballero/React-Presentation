import './App.css';
import Profile from './Profile'
import Interests from './Interests'
import Learn from './Learn'
import Expectations from './Expectations'
import Hobbies from './Hobbies'

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <h1 className="title">My Profile</h1>
            <div className="box-container">
                <Profile title="Profile" />
                <Interests title="Interests" />
                <Learn title="Learn" />
                <Expectations title="Expectations" />
                <Hobbies title="Hobbies" />
            </div>
        </header>
    </div>
  );
}

export default App;
