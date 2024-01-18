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
        {account && (
				<div>
					<h2>Current account:</h2>
					<div>Address: {account.address}</div>
          <div>Label: {account.label}</div>
				</div>
			)}
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
