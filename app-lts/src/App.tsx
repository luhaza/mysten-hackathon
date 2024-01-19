import './App.css';
import UserAndRewards from './components/UserAndRewards'
import OrganizationsList from './components/OrganizationsList'
import { ConnectButton, useCurrentAccount } from '@mysten/dapp-kit'; 


function App() {
  const account = useCurrentAccount(); 
  return (
    <div className="page">
      <div className="flex-container-row">
        <ConnectButton />
        {!account && <div>No account connected</div>}
      </div>
      
      <div className="spacer"></div>
      <MyBox />
    </div>
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
