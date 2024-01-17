import React from 'react'
import '../App.css';
import RewardsList from "./RewardsList"

const UserProfile = () => {
    return (
        <div className="flex-column flex-container-col large-container rounded"> 
            <div className="flex-row user-profile med-container rounded">
                <h2> User Name</h2>
            </div>
            <RewardsList/>
        </div>
    )
}

export default UserProfile;