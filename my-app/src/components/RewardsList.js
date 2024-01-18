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
            <div className="flex flex-col row-start-1 col-start-2 col-end-4 justify-center items-center">
                <h2 className="text-white font-bold text-5xl">Rewards Store</h2>
            </div>
            <div className="row-start-2 col-start-1 bg-blue-500 p-4 w-25 h-32">
                <CreditsButton credits={credits}/>
            </div>
            <StoreItem r={'2'} c={'2'} name={"Apple"} price={5} credits={credits} setCredits={setCredits}/>
            <StoreItem r={'2'} c={'3'} name={"Hat"} price={10} credits={credits} setCredits={setCredits}/>
            <StoreItem r={'2'} c={'4'} name={"Celcius"} price={15} credits={credits} setCredits={setCredits}/>
            <StoreItem r={'3'} c={'1'} name={"Water Bottle"} price={20} credits={credits} setCredits={setCredits}/>
            <StoreItem r={'3'} c={'2'} name={"Basketball"} price={25} credits={credits} setCredits={setCredits}/>
            <StoreItem r={'3'} c={'3'} name={"Car"} price={30} credits={credits} setCredits={setCredits}/>
            <StoreItem r={'3'} c={'4'} name={"Boat"} price={35} credits={credits} setCredits={setCredits}/>
        </div>
    )
}

export default RewardsList;