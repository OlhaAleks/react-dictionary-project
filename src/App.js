import myLogo from "./myLogo.png";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
      <img src={myLogo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Dictionary defaultKeyword="car" />
      </main>
     <footer className="App-footer">
      <small>Coded by Olha Aleksandrova
      </small>
      </footer>
    </div>
    </div>
  );
}

