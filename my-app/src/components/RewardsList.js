import React, { useState } from 'react'
import './RewardsList.css';
import '../index.css'
import '../App.css';
import CreditsButton from './CreditsButton'
import StoreItem from './StoreItem'

const RewardsList = () => {
    const [credits, setCredits] = useState(100);
    return (     
        <div className="grid grid-cols-4 grid-rows-3 gap-4 bg-blue-200 p-3">
            <div className="bg-blue-500 p-4 w-25 h-32">
                <CreditsButton credits={credits}/>
            </div>

            <StoreItem name={"Apple"} price={5} credits={credits} setCredits={setCredits}/>
            <StoreItem name={"Hat"} price={10} credits={credits} setCredits={setCredits}/>
            <StoreItem name={"Celcius"} price={15} credits={credits} setCredits={setCredits}/>
            <StoreItem name={"Water Bottle"} price={20} credits={credits} setCredits={setCredits}/>
            <StoreItem name={"Basketball"} price={25} credits={credits} setCredits={setCredits}/>
            <StoreItem name={"Car"} price={30} credits={credits} setCredits={setCredits}/>
            <StoreItem name={"Boat"} price={35} credits={credits} setCredits={setCredits}/>
        </div>
    )
}

export default RewardsList;