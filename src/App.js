import logo from './logo.svg';
import './App.css';

import Landing from './components/Landing';
import ModalWindow from './components/ModalWindow';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
           <code>trailquility</code> 
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <Landing/>
        <ModalWindow/>
      </div>
    </div>
  );
}

export default App;
