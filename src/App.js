import myLogo from "./myLogo.png";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={myLogo} className="App-logo" alt="logo" />
      </header>
      Hello
    </div>
  );
}

