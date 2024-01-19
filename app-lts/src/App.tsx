import './App.css';
import UserAndRewards from './components/UserAndRewards'
import OrganizationsList from './components/OrganizationsList'
import { ConnectButton, useCurrentAccount } from '@mysten/dapp-kit'; 


function App() {
  const account = useCurrentAccount(); 
  return (
    <div className="page">
      <div className="page-header">
        <div className="img">
          {/* <img src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/15753/wakame-seaweed-clipart-md.png" alt="Suiweed"> </img> */}
        </div>
        <p className="title"> Suiweed </p>
      </div>
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
    <div className="flex-container-row">
      <UserAndRewards/>
      <OrganizationsList/>
    </div>
  ); 
}



export default App;
