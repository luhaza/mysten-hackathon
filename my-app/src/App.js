import logo from './logo.svg';
import './App.css';
import UserProfile from './components/UserProfile'
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
      <UserProfile/>
      <OrganizationsList/>
    </div>
  ); 
}



export default App;
