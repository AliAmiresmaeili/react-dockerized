import logo from "./logo.svg";
import "./App.css";

function App() {
  const envMode = process.env.REACT_APP_MODE;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Environment Mode :</p>
        <a className="App-link" href="#!" rel="noopener noreferrer">
          {envMode}
        </a>
      </header>
    </div>
  );
}

export default App;
