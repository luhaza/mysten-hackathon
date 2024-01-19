import '../App.css';
import { useCurrentAccount } from '@mysten/dapp-kit'; 

const UserProfile = () => {
    const account = useCurrentAccount(); 
    return (
        <div>
            <div className="flex flex-col row-start-1 col-start-2 col-end-4 justify-center items-center">
                <h2 className="text-white font-bold text-3xl">User Profile</h2>
            </div>
            <div className="grid grid-cols-4 grid-rows-4 gap-4 bg-blue-200 p-2">
            <div className="bg-green-500 p-4 row-start-1 row-span-2 col-start-1 col-end-2 text-white font-bold w-25 h-50">
                Username: 
                {!account && <div>No account connected</div>}
			    {account && (
					<div>{account.label}</div>
			)}
            </div>
            <div className="bg-green-500 p-4 row-start-3 row-span-2 col-start-1 col-end-2 text-white font-bold w-25 h-50">Total Donated: </div>
            <div className="bg-green-500 p-4 row-start-1 col-start-2 text-white font-bold row-span-2 col-span-2 w-25 h-50">AVATAR</div>
        </div>
        </div>
        
    )
}

export default UserProfile