import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="page">
      {/* <h1>wassa</h1> */}
      <div className="flex-container">
      <div className="flex-column"> </div>
      <div className="flex-column">
        <button class="button loginButton"> Sign In to Sui Wallet </button>
      </div>
      </div>
      <div className="spacer"></div>
      <MyBox />
      <MyButton />
    </div>
  );
}

function MyButton() {
  return (
    <button>Donate</button>
  );
}

function MyBox(){
  return (
    <div className="page">
      {/* hehe */}
    </div>
  ); 
}

export default App;
