import React from 'react'
import '../App.css';

const UserProfile = () => {
    return (
        <div className="grid grid-cols-3 grid-rows-3 gap-4 bg-blue-200 p-4">
            <div class="bg-green-500 p-4 row-start-1 col-start-1">Username: </div>
            <div className="bg-green-500 p-4 row-start-2 col-start-1">Total Donated: </div>
            <div className="bg-green-500 p-4 row-start-1 col-start-2 row-span-2 col-span-2">AVATAR</div>
        </div>
    )
}

export default UserProfile