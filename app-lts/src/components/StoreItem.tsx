import React, { useState } from 'react'

interface CreditsButtonProps {
    r : string,
    c : string,
    name : string, 
    price : number,
    credits : number, 
    setCredits : React.Dispatch<React.SetStateAction<number>>,
}

const StoreItem : React.FC<CreditsButtonProps> = ({r, c, name, price, credits, setCredits}) => {
    const handleBuy = () => {
        if (credits - price >= 0){
            const newCredits = credits - price;
            setCredits(newCredits);
        }
    }

    return (
        <div className={`row-start-${r} col-start-${c} flex flex-col justify-center items-center text-white font-bold bg-red-500 p-4 w-25 h-32`}>
            <h2>{name}</h2>
            <button onClick={handleBuy} className="bg-red-300 hover:bg-red-600 text-white font-bold py-10% px-5% rounded m-4 sm:text-md md:text-lg lg:text-xl">
                Buy Item
            </button>
            <h3>Price: ${price}</h3>
        </div>
    )
}

export default StoreItem;