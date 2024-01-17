import React from 'react'
import './RewardsList.css';
import '../index.css'
import '../App.css';
import CreditsButton from './CreditsButton'

const RewardsList = () => {
    return (     
        <div className="grid grid-cols-4 grid-rows-3 gap-4 bg-blue-200 p-3">
            <div class="bg-blue-500 p-4 w-25 h-32"> <CreditsButton/></div>
            <div className="bg-red-500 p-4 w-25 h-32">Item 2</div>
            <div className="bg-red-500 p-4 w-25 h-32">Item 3</div>
            <div className="bg-red-500 p-4 w-25 h-32">Item 4</div>
            <div className="bg-red-500 p-4 w-25 h-32">Item 5</div>
            <div className="bg-red-500 p-4 w-25 h-32">Item 2</div>
            <div className="bg-red-500 p-4 w-25 h-32">Item 3</div>
            <div className="bg-red-500 p-4 w-25 h-32">Item 4</div>
        </div>
    )
}

export default RewardsList;