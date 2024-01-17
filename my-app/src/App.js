import logo from './logo.svg';
import './App.css';
import UserAndRewards from './components/UserAndRewards'
import OrganizationsList from './components/OrganizationsList'


function App() {
  return (
    <div className="page">
      <button className="button loginButton"> Sign In to Sui Wallet </button>
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
    <div className="flex-container-row organizations">
      <UserAndRewards/>
      <OrganizationsList/>
    </div>
  ); 
}



export default App;
