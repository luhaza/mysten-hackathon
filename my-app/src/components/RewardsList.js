import React from 'react'
import './RewardsList.css';
import '../index.css'
import '../App.css';
import CreditsButton from './CreditsButton'

const RewardsList = () => {
    return (     
        // <div className='flex-row med-container rounded'>
        //     <div className='grid-container'>
        //         <div className='grid-title'>Rewards Store</div>

        //         <div style={{gridRow: 1, gridColumn: 1}} className='grid-item'>
        //             <CreditsButton/>
        //         </div>

        //         <div style={{gridRow: 2, gridColumn: 1}} className='grid-item'></div>
        //         <div style={{gridRow: 2, gridColumn: 2}} className='grid-item'></div>
        //         <div style={{gridRow: 2, gridColumn: 3}} className='grid-item'></div>
        //         <div style={{gridRow: 2, gridColumn: 4}} className='grid-item'></div>

        //         <div style={{gridRow: 3, gridColumn: 1}} className='grid-item'></div>
        //         <div style={{gridRow: 3, gridColumn: 2}} className='grid-item'></div>
        //         <div style={{gridRow: 3, gridColumn: 3}} className='grid-item'></div>
        //         <div style={{gridRow: 3, gridColumn: 4}} className='grid-item'></div>

        //     </div>
        // </div>
        <div className="grid grid-cols-4 grid-rows-3 gap-4 bg-blue-200 p-4">
            <div class="bg-blue-500 p-4">Item 1</div>
            <div className="bg-green-500 p-4">Item 2</div>
            <div className="bg-red-500 p-4">Item 3</div>
            <div className="bg-red-500 p-4">Item 4</div>
            <div className="bg-red-500 p-4">Item 5</div>
        </div>
        
    )
}

export default RewardsList;