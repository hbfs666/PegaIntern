import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Performance from './components/Performance';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Performance/>
      </header>
    </div>
  );
}

export default App;
