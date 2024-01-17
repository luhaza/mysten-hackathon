import logo from './logo.svg';
import './App.css';
import UserProfile from './components/UserProfile'
import OrganizationsList from './components/OrganizationsList'


function App() {
  return (
    <div className="page">
      <div className="flex-container"> 
        <UserProfile/>
        <OrganizationsList/>
      </div>
      
      {/* <div className="flex-container">
      <div className="flex-column"> </div>
      <div className="flex-column">
        <button class="button loginButton"> Sign In to Sui Wallet </button>
      </div>
      </div>
      <div className="spacer"></div>
      <MyBox />
      <MyButton /> */}
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
    <div className="flex-container">
      <div className="flex-column large-container rounded"> 
        Your Avatar
      </div>
      <div className="flex-column large-container rounded"> 
        Donations
      </div>
    </div>
  ); 
}



export default App;
