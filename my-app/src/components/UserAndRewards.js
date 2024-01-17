import React from 'react'
import '../App.css';
import RewardsList from "./RewardsList"
import UserProfile from "./UserProfile"

const UserAndRewards = () => {
    return (
        <div class="flex-column flex items-center justify-center h-screen bg-blue-200">
            <UserProfile/>
            <RewardsList/>
        </div>
        // <div className="flex-column flex-container-col large-container white-background rounded"> 
        //     <div className="flex-row med-container rounded">
        //         <h2> User Name</h2>
        //     </div>
        //     <RewardsList/>
        // </div>
    )
}

export default UserAndRewards;